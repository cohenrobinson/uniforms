"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const invariant_1 = (0, tslib_1.__importDefault)(require("invariant"));
const cloneDeep_1 = (0, tslib_1.__importDefault)(require("lodash/cloneDeep"));
const get_1 = (0, tslib_1.__importDefault)(require("lodash/get"));
const isEmpty_1 = (0, tslib_1.__importDefault)(require("lodash/isEmpty"));
const lowerCase_1 = (0, tslib_1.__importDefault)(require("lodash/lowerCase"));
const memoize_1 = (0, tslib_1.__importDefault)(require("lodash/memoize"));
const upperFirst_1 = (0, tslib_1.__importDefault)(require("lodash/upperFirst"));
const uniforms_1 = require("uniforms");
function fieldInvariant(name, condition) {
    (0, invariant_1.default)(condition, 'Field not found in schema: "%s"', name);
}
function resolveRef(reference, schema) {
    (0, invariant_1.default)(reference.startsWith('#'), 'Reference is not an internal reference, and only such are allowed: "%s"', reference);
    const resolvedReference = reference
        .split('/')
        .filter(part => part && part !== '#')
        .reduce((definition, next) => definition[next], schema);
    (0, invariant_1.default)(resolvedReference, 'Reference not found in schema: "%s"', reference);
    return resolvedReference;
}
function resolveRefIfNeeded(partial, schema) {
    if (!('$ref' in partial)) {
        return partial;
    }
    const { $ref } = partial, partialWithoutRef = (0, tslib_1.__rest)(partial, ["$ref"]);
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
class JSONSchemaBridge extends uniforms_1.Bridge {
    constructor({ provideDefaultLabelFromFieldName = true, schema, validator, }) {
        super();
        this.provideDefaultLabelFromFieldName = provideDefaultLabelFromFieldName;
        this.schema = resolveRefIfNeeded(schema, schema);
        this._compiledSchema = { '': this.schema };
        this.validator = validator;
        // Memoize for performance and referential equality.
        this.getField = (0, memoize_1.default)(this.getField.bind(this));
        this.getInitialValue = (0, memoize_1.default)(this.getInitialValue.bind(this));
        this.getSubfields = (0, memoize_1.default)(this.getSubfields.bind(this));
        this.getType = (0, memoize_1.default)(this.getType.bind(this));
    }
    getError(name, error) {
        const details = isValidatorResult(error) && error.details;
        if (!details) {
            return null;
        }
        const nameParts = (0, uniforms_1.joinName)(null, name).map(uniforms_1.joinName.unescape);
        const unescapedName = (0, uniforms_1.joinName)(nameParts);
        const rootName = (0, uniforms_1.joinName)(nameParts.slice(0, -1));
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
        return (0, uniforms_1.joinName)(null, name).reduce((definition, next, index, array) => {
            var _a, _b, _c;
            var _d;
            const prevName = (0, uniforms_1.joinName)(array.slice(0, index));
            const nextName = (0, uniforms_1.joinName)(prevName, next);
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
                definition = definition.properties[uniforms_1.joinName.unescape(next)];
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
            if (!(0, isEmpty_1.default)(properties)) {
                definitionCache.properties = properties;
            }
            return definition;
        }, this.schema);
    }
    getInitialValue(name) {
        var _a;
        const field = this.getField(name);
        const { default: defaultValue = (_a = field.default) !== null && _a !== void 0 ? _a : (0, get_1.default)(this.schema.default, name), type = field.type, } = this._compiledSchema[name];
        if (defaultValue !== undefined) {
            return (0, cloneDeep_1.default)(defaultValue);
        }
        if (type === 'array') {
            const item = this.getInitialValue((0, uniforms_1.joinName)(name, '$'));
            if (item === undefined) {
                return [];
            }
            const length = field.minItems || 0;
            return Array.from({ length }, () => item);
        }
        if (type === 'object') {
            const value = {};
            this.getSubfields(name).forEach(key => {
                const initialValue = this.getInitialValue((0, uniforms_1.joinName)(name, key));
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
            props.label = (0, upperFirst_1.default)((0, lowerCase_1.default)((0, uniforms_1.joinName)(null, name).slice(-1)[0]));
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
            return Object.keys(properties).map(uniforms_1.joinName.escape);
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
        (0, invariant_1.default)(fieldType !== 'null', 'Field "%s" can not be represented as a type null', name);
        return fieldType;
    }
    getValidator() {
        return this.validator;
    }
}
exports.default = JSONSchemaBridge;
