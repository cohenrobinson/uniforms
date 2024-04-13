"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const invariant_1 = (0, tslib_1.__importDefault)(require("invariant"));
const cloneDeep_1 = (0, tslib_1.__importDefault)(require("lodash/cloneDeep"));
const memoize_1 = (0, tslib_1.__importDefault)(require("lodash/memoize"));
const simpl_schema_1 = (0, tslib_1.__importDefault)(require("simpl-schema"));
const uniforms_1 = require("uniforms");
const propsToRemove = ['optional', 'uniforms', 'allowedValues'];
function makeGeneric(name) {
    return name === null || name === void 0 ? void 0 : name.replace(/\.\d+(\.|$)/g, '.$$$1');
}
class SimpleSchema2Bridge extends uniforms_1.Bridge {
    constructor({ schema }) {
        super();
        this.schema = schema;
        // Memoize for performance and referential equality.
        this.getField = (0, memoize_1.default)(this.getField.bind(this));
        this.getInitialValue = (0, memoize_1.default)(this.getInitialValue.bind(this));
        this.getProps = (0, memoize_1.default)(this.getProps.bind(this));
        this.getSubfields = (0, memoize_1.default)(this.getSubfields.bind(this));
        this.getType = (0, memoize_1.default)(this.getType.bind(this));
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
        (0, invariant_1.default)(definition, 'Field not found in schema: "%s"', name);
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
            return (0, cloneDeep_1.default)(defaultValue);
        }
        if (field.type === Array) {
            const item = this.getInitialValue((0, uniforms_1.joinName)(name, '$'));
            if (item === undefined) {
                return [];
            }
            const length = field.minCount || 0;
            return Array.from({ length }, () => item);
        }
        if (field.type === Object || field.type instanceof simpl_schema_1.default) {
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
        const _a = this.getField(name), { type: fieldType } = _a, props = (0, tslib_1.__rest)(_a, ["type"]);
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
        if (type === simpl_schema_1.default.Integer) {
            return Number;
        }
        if (type instanceof simpl_schema_1.default) {
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
                validator(options.clean ? (0, cloneDeep_1.default)(Object.assign({}, model)) : model);
                return null;
            }
            catch (error) {
                return error;
            }
        };
    }
}
exports.default = SimpleSchema2Bridge;
