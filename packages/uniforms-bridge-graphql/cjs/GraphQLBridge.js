"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const definition_1 = require("graphql/type/definition");
const invariant_1 = (0, tslib_1.__importDefault)(require("invariant"));
const lowerCase_1 = (0, tslib_1.__importDefault)(require("lodash/lowerCase"));
const memoize_1 = (0, tslib_1.__importDefault)(require("lodash/memoize"));
const upperFirst_1 = (0, tslib_1.__importDefault)(require("lodash/upperFirst"));
const uniforms_1 = require("uniforms");
function fieldInvariant(name, condition) {
    (0, invariant_1.default)(condition, 'Field not found in schema: "%s"', name);
}
class GraphQLBridge extends uniforms_1.Bridge {
    constructor({ extras = {}, provideDefaultLabelFromFieldName = true, schema, validator, }) {
        super();
        this.extras = extras;
        this.provideDefaultLabelFromFieldName = provideDefaultLabelFromFieldName;
        this.schema = schema;
        this.validator = validator;
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
        return (scopedError === null || scopedError === void 0 ? void 0 : scopedError.message) || '';
    }
    // TODO: Get rid of this `any`.
    getErrorMessages(error) {
        if (!error) {
            return [];
        }
        const { details } = error;
        return Array.isArray(details)
            ? details.map(error => error.message)
            : [error.message || error];
    }
    getField(name) {
        return (0, uniforms_1.joinName)(null, name).reduce((field, namePart) => {
            const fieldType = (0, definition_1.getNullableType)(field.type);
            if (namePart === '$' || namePart === '' + parseInt(namePart, 10)) {
                fieldInvariant(name, (0, definition_1.isListType)(fieldType));
                return Object.assign(Object.assign({}, field), { type: fieldType.ofType });
            }
            if ((0, definition_1.isInputObjectType)(fieldType) || (0, definition_1.isObjectType)(fieldType)) {
                const fields = fieldType.getFields();
                fieldInvariant(name, namePart in fields);
                return fields[namePart];
            }
            fieldInvariant(name, false);
        }, { name: '', type: this.schema });
    }
    getInitialValue(name) {
        var _a;
        const type = this.getType(name);
        if (type === Array) {
            return [];
        }
        if (type === Object) {
            const value = {};
            this.getSubfields(name).forEach(key => {
                const initialValue = this.getInitialValue((0, uniforms_1.joinName)(name, key));
                if (initialValue !== undefined) {
                    value[key] = initialValue;
                }
            });
            return value;
        }
        const { defaultValue } = this.getField(name);
        // @ts-expect-error The `extras` should be typed more precisely.
        return defaultValue !== null && defaultValue !== void 0 ? defaultValue : (_a = this.extras[name]) === null || _a === void 0 ? void 0 : _a.initialValue;
    }
    getProps(nameNormal) {
        const nameGeneric = nameNormal.replace(/\.\d+/g, '.$');
        const field = this.getField(nameGeneric);
        const props = Object.assign(Object.assign({ required: (0, definition_1.isNonNullType)(field.type) }, this.extras[nameGeneric]), this.extras[nameNormal]);
        const fieldType = (0, definition_1.getNullableType)(field.type);
        if ((0, definition_1.isScalarType)(fieldType) && fieldType.name === 'Float') {
            props.decimal = true;
        }
        if (this.provideDefaultLabelFromFieldName && props.label === undefined) {
            props.label = (0, upperFirst_1.default)((0, lowerCase_1.default)(field.name));
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
        else if ((0, definition_1.isEnumType)(fieldType)) {
            const values = fieldType.getValues();
            options = values.map(option => ({
                label: option.name,
                value: option.value,
            }));
        }
        return Object.assign(props, { options });
    }
    getSubfields(name = '') {
        const type = (0, definition_1.getNullableType)(this.getField(name).type);
        return (0, definition_1.isInputObjectType)(type) || (0, definition_1.isObjectType)(type)
            ? Object.keys(type.getFields())
            : [];
    }
    getType(name) {
        const type = (0, definition_1.getNullableType)(this.getField(name).type);
        if ((0, definition_1.isInputObjectType)(type) || (0, definition_1.isObjectType)(type)) {
            return Object;
        }
        if ((0, definition_1.isListType)(type)) {
            return Array;
        }
        if ((0, definition_1.isScalarType)(type)) {
            if (type.name === 'Boolean') {
                return Boolean;
            }
            if (type.name === 'Float') {
                return Number;
            }
            if (type.name === 'ID') {
                return String;
            }
            if (type.name === 'Int') {
                return Number;
            }
            if (type.name === 'String') {
                return String;
            }
        }
        return type;
    }
    getValidator( /* options */) {
        return this.validator;
    }
}
exports.default = GraphQLBridge;
