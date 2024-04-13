import { __rest } from "tslib";
import invariant from 'invariant';
import cloneDeep from 'lodash/cloneDeep';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import lowerCase from 'lodash/lowerCase';
import memoize from 'lodash/memoize';
import upperFirst from 'lodash/upperFirst';
import { Bridge, joinName } from 'uniforms';
function fieldInvariant(name, condition) {
    invariant(condition, 'Field not found in schema: "%s"', name);
}
function resolveRef(reference, schema) {
    invariant(reference.startsWith('#'), 'Reference is not an internal reference, and only such are allowed: "%s"', reference);
    const resolvedReference = reference
        .split('/')
        .filter(part => part && part !== '#')
        .reduce((definition, next) => definition[next], schema);
    invariant(resolvedReference, 'Reference not found in schema: "%s"', reference);
    return resolvedReference;
}
function resolveRefIfNeeded(partial, schema) {
    if (!('$ref' in partial)) {
        return partial;
    }
    const { $ref } = partial, partialWithoutRef = __rest(partial, ["$ref"]);
    return resolveRefIfNeeded(
    // @ts-expect-error The `partial` and `schema` should be typed more precisely.
    Object.assign({}, partialWithoutRef, resolveRef($ref, schema)), schema);
}
const partialNames = ['allOf', 'anyOf', 'oneOf'];
const propsToRemove = [
    'default',
    'enum',
    'format',
    'isRequired',
    'title',
    'uniforms',
];
const propsToRename = [
    ['maxItems', 'maxCount'],
    ['maximum', 'max'],
    ['minItems', 'minCount'],
    ['minimum', 'min'],
    ['multipleOf', 'step'],
];
function pathToName(path) {
    path = path.startsWith('/')
        ? path.replace(/\//g, '.').replace(/~0/g, '~').replace(/~1/g, '/')
        : path
            .replace(/\[('|")(.+?)\1\]/g, '.$2')
            .replace(/\[(.+?)\]/g, '.$1')
            .replace(/\\'/g, "'");
    return path.slice(1);
}
function isValidatorResult(value) {
    return (typeof value === 'object' &&
        value !== null &&
        Array.isArray(value.details));
}
export default class JSONSchemaBridge extends Bridge {
    constructor({ provideDefaultLabelFromFieldName = true, schema, validator, }) {
        super();
        this.provideDefaultLabelFromFieldName = provideDefaultLabelFromFieldName;
        this.schema = resolveRefIfNeeded(schema, schema);
        this._compiledSchema = { '': this.schema };
        this.validator = validator;
        // Memoize for performance and referential equality.
        this.getField = memoize(this.getField.bind(this));
        this.getInitialValue = memoize(this.getInitialValue.bind(this));
        this.getSubfields = memoize(this.getSubfields.bind(this));
        this.getType = memoize(this.getType.bind(this));
    }
    getError(name, error) {
        const details = isValidatorResult(error) && error.details;
        if (!details) {
            return null;
        }
        const nameParts = joinName(null, name).map(joinName.unescape);
        const unescapedName = joinName(nameParts);
        const rootName = joinName(nameParts.slice(0, -1));
        const baseName = nameParts[nameParts.length - 1];
        const scopedError = details.find(error => {
            var _a;
            const rawPath = (_a = error.instancePath) !== null && _a !== void 0 ? _a : error.dataPath;
            const path = rawPath ? pathToName(rawPath) : '';
            return (unescapedName === path ||
                (rootName === path &&
                    error.params &&
                    baseName === error.params.missingProperty));
        });
        return scopedError || null;
    }
    getErrorMessage(name, error) {
        const scopedError = this.getError(name, error);
        return (scopedError === null || scopedError === void 0 ? void 0 : scopedError.message) || '';
    }
    getErrorMessages(error) {
        if (!error) {
            return [];
        }
        if (isValidatorResult(error)) {
            const { details } = error;
            return details.map(error => error.message || '');
        }
        if (error instanceof Error) {
            return [error.message];
        }
        if (typeof error === 'object') {
            return [];
        }
        return [String(error)];
    }
    getField(name) {
        return joinName(null, name).reduce((definition, next, index, array) => {
            var _a, _b, _c;
            var _d;
            const prevName = joinName(array.slice(0, index));
            const nextName = joinName(prevName, next);
            const definitionCache = ((_a = (_d = this._compiledSchema)[nextName]) !== null && _a !== void 0 ? _a : (_d[nextName] = {}));
            definitionCache.isRequired = !!(((_b = definition.required) === null || _b === void 0 ? void 0 : _b.includes(next)) ||
                ((_c = this._compiledSchema[prevName].required) === null || _c === void 0 ? void 0 : _c.includes(next)));
            if (next === '$' || next === '' + parseInt(next, 10)) {
                fieldInvariant(name, definition.type === 'array');
                definition = Array.isArray(definition.items)
                    ? definition.items[parseInt(next, 10)]
                    : definition.items;
                fieldInvariant(name, !!definition);
            }
            else if (definition.type === 'object') {
                fieldInvariant(name, !!definition.properties);
                definition = definition.properties[joinName.unescape(next)];
                fieldInvariant(name, !!definition);
            }
            else {
                let nextFound = false;
                partialNames.forEach(partialName => {
                    var _a;
                    (_a = definition[partialName]) === null || _a === void 0 ? void 0 : _a.forEach((partialElement) => {
                        if (!nextFound) {
                            partialElement = resolveRefIfNeeded(partialElement, this.schema);
                            if (next in partialElement.properties) {
                                definition = partialElement.properties[next];
                                nextFound = true;
                            }
                        }
                    });
                });
                fieldInvariant(name, nextFound);
            }
            definition = resolveRefIfNeeded(definition, this.schema);
            // Naive computation of combined type, properties and required.
            const required = definition.required ? definition.required.slice() : [];
            const properties = definition.properties
                ? Object.assign({}, definition.properties)
                : {};
            partialNames.forEach(partialName => {
                var _a;
                (_a = definition[partialName]) === null || _a === void 0 ? void 0 : _a.forEach((partial) => {
                    partial = resolveRefIfNeeded(partial, this.schema);
                    if (partial.required) {
                        required.push(...partial.required);
                    }
                    Object.assign(properties, partial.properties);
                    if (!definitionCache.type && partial.type) {
                        definitionCache.type = partial.type;
                    }
                });
            });
            if (required.length > 0) {
                definitionCache.required = required;
            }
            if (!isEmpty(properties)) {
                definitionCache.properties = properties;
            }
            return definition;
        }, this.schema);
    }
    getInitialValue(name) {
        var _a;
        const field = this.getField(name);
        const { default: defaultValue = (_a = field.default) !== null && _a !== void 0 ? _a : get(this.schema.default, name), type = field.type, } = this._compiledSchema[name];
        if (defaultValue !== undefined) {
            return cloneDeep(defaultValue);
        }
        if (type === 'array') {
            const item = this.getInitialValue(joinName(name, '$'));
            if (item === undefined) {
                return [];
            }
            const length = field.minItems || 0;
            return Array.from({ length }, () => item);
        }
        if (type === 'object') {
            const value = {};
            this.getSubfields(name).forEach(key => {
                const initialValue = this.getInitialValue(joinName(name, key));
                if (initialValue !== undefined) {
                    value[key] = initialValue;
                }
            });
            return value;
        }
        return undefined;
    }
    getProps(name) {
        var _a, _b;
        const field = this.getField(name);
        const props = Object.assign({}, field, field.uniforms, this._compiledSchema[name]);
        (_a = props.label) !== null && _a !== void 0 ? _a : (props.label = props.title);
        if (this.provideDefaultLabelFromFieldName && props.label === undefined) {
            props.label = upperFirst(lowerCase(joinName(null, name).slice(-1)[0]));
        }
        if (field.type === 'number') {
            props.decimal = true;
        }
        if (((_b = field.uniforms) === null || _b === void 0 ? void 0 : _b.type) !== undefined) {
            props.type = field.uniforms.type;
        }
        if (props.required === undefined) {
            props.required = props.isRequired;
        }
        if (props.type === field.type) {
            delete props.type;
        }
        let options = props.options;
        if (options) {
            if (!Array.isArray(options)) {
                options = Object.entries(options).map(([key, value]) => ({
                    key,
                    label: key,
                    value,
                }));
            }
        }
        else if (props.enum) {
            options = Object.values(props.enum).map(value => ({ value }));
        }
        propsToRename.forEach(([key, newKey]) => {
            if (key in props) {
                props[newKey] = props[key];
                delete props[key];
            }
        });
        propsToRemove.forEach(key => {
            if (key in props) {
                delete props[key];
            }
        });
        return Object.assign(props, { options });
    }
    getSubfields(name = '') {
        const field = this.getField(name);
        const { properties = field.properties, type = field.type } = this._compiledSchema[name];
        if (type === 'object' && properties) {
            return Object.keys(properties).map(joinName.escape);
        }
        return [];
    }
    getType(name) {
        const { type: _type, format: fieldFormat } = this.getField(name);
        const { type: fieldType = _type } = this._compiledSchema[name];
        if (fieldFormat === 'date-time') {
            return Date;
        }
        if (fieldType === 'string') {
            return String;
        }
        if (fieldType === 'number') {
            return Number;
        }
        if (fieldType === 'integer') {
            return Number;
        }
        if (fieldType === 'object') {
            return Object;
        }
        if (fieldType === 'array') {
            return Array;
        }
        if (fieldType === 'boolean') {
            return Boolean;
        }
        invariant(fieldType !== 'null', 'Field "%s" can not be represented as a type null', name);
        return fieldType;
    }
    getValidator() {
        return this.validator;
    }
}
