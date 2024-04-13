import { getNullableType, isEnumType, isInputObjectType, isListType, isNonNullType, isObjectType, isScalarType, } from 'graphql/type/definition';
import invariant from 'invariant';
import lowerCase from 'lodash/lowerCase';
import memoize from 'lodash/memoize';
import upperFirst from 'lodash/upperFirst';
import { Bridge, joinName } from 'uniforms';
function fieldInvariant(name, condition) {
    invariant(condition, 'Field not found in schema: "%s"', name);
}
export default class GraphQLBridge extends Bridge {
    constructor({ extras = {}, provideDefaultLabelFromFieldName = true, schema, validator, }) {
        super();
        this.extras = extras;
        this.provideDefaultLabelFromFieldName = provideDefaultLabelFromFieldName;
        this.schema = schema;
        this.validator = validator;
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
        return joinName(null, name).reduce((field, namePart) => {
            const fieldType = getNullableType(field.type);
            if (namePart === '$' || namePart === '' + parseInt(namePart, 10)) {
                fieldInvariant(name, isListType(fieldType));
                return Object.assign(Object.assign({}, field), { type: fieldType.ofType });
            }
            if (isInputObjectType(fieldType) || isObjectType(fieldType)) {
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
                const initialValue = this.getInitialValue(joinName(name, key));
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
        const props = Object.assign(Object.assign({ required: isNonNullType(field.type) }, this.extras[nameGeneric]), this.extras[nameNormal]);
        const fieldType = getNullableType(field.type);
        if (isScalarType(fieldType) && fieldType.name === 'Float') {
            props.decimal = true;
        }
        if (this.provideDefaultLabelFromFieldName && props.label === undefined) {
            props.label = upperFirst(lowerCase(field.name));
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
        else if (isEnumType(fieldType)) {
            const values = fieldType.getValues();
            options = values.map(option => ({
                label: option.name,
                value: option.value,
            }));
        }
        return Object.assign(props, { options });
    }
    getSubfields(name = '') {
        const type = getNullableType(this.getField(name).type);
        return isInputObjectType(type) || isObjectType(type)
            ? Object.keys(type.getFields())
            : [];
    }
    getType(name) {
        const type = getNullableType(this.getField(name).type);
        if (isInputObjectType(type) || isObjectType(type)) {
            return Object;
        }
        if (isListType(type)) {
            return Array;
        }
        if (isScalarType(type)) {
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
