import { __rest } from "tslib";
import invariant from 'invariant';
import cloneDeep from 'lodash/cloneDeep';
import memoize from 'lodash/memoize';
import SimpleSchema from 'simpl-schema';
import { Bridge, joinName } from 'uniforms';
const propsToRemove = ['optional', 'uniforms', 'allowedValues'];
function makeGeneric(name) {
    return name === null || name === void 0 ? void 0 : name.replace(/\.\d+(\.|$)/g, '.$$$1');
}
export default class SimpleSchema2Bridge extends Bridge {
    constructor({ schema }) {
        super();
        this.schema = schema;
        // Memoize for performance and referential equality.
        this.getField = memoize(this.getField.bind(this));
        this.getInitialValue = memoize(this.getInitialValue.bind(this));
        this.getProps = memoize(this.getProps.bind(this));
        this.getSubfields = memoize(this.getSubfields.bind(this));
        this.getType = memoize(this.getType.bind(this));
    }
    // TODO: Get rid of this `any`.
    getError(name, error) {
        const details = error === null || error === void 0 ? void 0 : error.details;
        if (!Array.isArray(details)) {
            return null;
        }
        return details.find(error => error.name === name) || null;
    }
    // TODO: Get rid of this `any`.
    getErrorMessage(name, error) {
        const scopedError = this.getError(name, error);
        // @ts-expect-error: `messageForError` has incorrect typing.
        return !scopedError ? '' : this.schema.messageForError(scopedError);
    }
    // TODO: Get rid of this `any`.
    getErrorMessages(error) {
        if (!error) {
            return [];
        }
        const { details } = error;
        return Array.isArray(details)
            ? // @ts-expect-error: `messageForError` has incorrect typing.
                details.map(error => this.schema.messageForError(error))
            : [error.message || error];
    }
    getField(name) {
        const definition = this.schema.getDefinition(name);
        invariant(definition, 'Field not found in schema: "%s"', name);
        const merged = Object.assign(Object.assign({}, definition), definition.type[0]);
        // aldeed/node-simple-schema#27
        if (merged.autoValue &&
            (merged.autoValue.name === 'defaultAutoValueFunction' ||
                merged.autoValue.toString().indexOf('$setOnInsert:') !== -1) // FIXME: Hack.
        ) {
            try {
                merged.defaultValue = merged.autoValue.call({ operator: null });
            }
            catch (_) {
                // It's fine.
            }
        }
        return merged;
    }
    getInitialValue(name) {
        const field = this.getField(name);
        const defaultValue = field.defaultValue;
        if (defaultValue !== undefined) {
            return cloneDeep(defaultValue);
        }
        if (field.type === Array) {
            const item = this.getInitialValue(joinName(name, '$'));
            if (item === undefined) {
                return [];
            }
            const length = field.minCount || 0;
            return Array.from({ length }, () => item);
        }
        if (field.type === Object || field.type instanceof SimpleSchema) {
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
        const _a = this.getField(name), { type: fieldType } = _a, props = __rest(_a, ["type"]);
        props.required = !props.optional;
        if (typeof props.uniforms === 'function' ||
            typeof props.uniforms === 'string') {
            props.component = props.uniforms;
        }
        else {
            Object.assign(props, props.uniforms);
        }
        if (fieldType === Number) {
            props.decimal = true;
        }
        let options = props.options;
        let allowedValues = props.allowedValues;
        if (typeof options === 'function') {
            options = options();
        }
        if (!options && typeof allowedValues === 'function') {
            allowedValues = allowedValues();
        }
        if (!options && Array.isArray(allowedValues)) {
            options = allowedValues.map(value => ({ value }));
        }
        else if (fieldType === Array) {
            try {
                const itemProps = this.getProps(`${name}.$`);
                if (itemProps.options) {
                    options = itemProps.options;
                }
            }
            catch (_) {
                // It's fine.
            }
        }
        propsToRemove.forEach(key => {
            if (key in props) {
                delete props[key];
            }
        });
        return Object.assign(props, { options });
    }
    getSubfields(name) {
        return this.schema.objectKeys(makeGeneric(name));
    }
    getType(name) {
        const type = this.getField(name).type;
        if (type === SimpleSchema.Integer) {
            return Number;
        }
        if (type instanceof SimpleSchema) {
            return Object;
        }
        return type;
    }
    // TODO: `ValidationOption` is not exported.
    getValidator(options = { clean: true, mutate: true }) {
        const validator = this.schema.validator(options);
        return (model) => {
            try {
                // Clean mutate its argument, even if mutate is false.
                validator(options.clean ? cloneDeep(Object.assign({}, model)) : model);
                return null;
            }
            catch (error) {
                return error;
            }
        };
    }
}
