"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const invariant_1 = (0, tslib_1.__importDefault)(require("invariant"));
const cloneDeep_1 = (0, tslib_1.__importDefault)(require("lodash/cloneDeep"));
const memoize_1 = (0, tslib_1.__importDefault)(require("lodash/memoize"));
// @ts-ignore -- This package _is_ typed, but not in all environments.
const aldeed_simple_schema_1 = require("meteor/aldeed:simple-schema");
const uniforms_1 = require("uniforms");
const propsToRemove = ['optional', 'uniforms', 'allowedValues'];
class SimpleSchemaBridge extends uniforms_1.Bridge {
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
        return !scopedError
            ? ''
            : this.schema.messageForError(scopedError.type, scopedError.name, null, scopedError.details && scopedError.details.value);
    }
    // TODO: Get rid of this `any`.
    getErrorMessages(error) {
        if (!error) {
            return [];
        }
        const { details } = error;
        return Array.isArray(details)
            ? details.map(error => this.schema.messageForError(error.type, error.name, null, error.details && error.details.value))
            : [error.message || error];
    }
    getField(name) {
        const definition = this.schema.getDefinition(name);
        (0, invariant_1.default)(definition, 'Field not found in schema: "%s"', name);
        return definition;
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
        if (field.type === Object) {
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
        return this.schema.objectKeys(aldeed_simple_schema_1.SimpleSchema._makeGeneric(name));
    }
    getType(name) {
        return this.getField(name).type;
    }
    getValidator(options = { clean: true }) {
        const validator = this.schema.validator(options);
        return (model) => {
            try {
                // Clean mutate its argument.
                validator(options.clean ? (0, cloneDeep_1.default)(Object.assign({}, model)) : model);
                return null;
            }
            catch (error) {
                return error;
            }
        };
    }
}
exports.default = SimpleSchemaBridge;
