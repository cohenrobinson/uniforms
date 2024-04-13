import invariant from 'invariant';
import lowerCase from 'lodash/lowerCase';
import memoize from 'lodash/memoize';
import upperFirst from 'lodash/upperFirst';
import { Bridge, joinName } from 'uniforms';
import { ZodArray, ZodBoolean, ZodDate, ZodDefault, ZodEnum, ZodError, ZodNativeEnum, ZodNumber, ZodObject, ZodOptional, ZodString, } from 'zod';
function fieldInvariant(name, condition) {
    invariant(condition, 'Field not found in schema: "%s"', name);
}
function isNativeEnumValue(value) {
    return typeof value !== 'string';
}
export default class ZodBridge extends Bridge {
    constructor({ schema, provideDefaultLabelFromFieldName = true, }) {
        super();
        this.schema = schema;
        this.provideDefaultLabelFromFieldName = provideDefaultLabelFromFieldName;
        // Memoize for performance and referential equality.
        this.getField = memoize(this.getField.bind(this));
        this.getInitialValue = memoize(this.getInitialValue.bind(this));
        this.getProps = memoize(this.getProps.bind(this));
        this.getSubfields = memoize(this.getSubfields.bind(this));
        this.getType = memoize(this.getType.bind(this));
    }
    getError(name, error) {
        if (!(error instanceof ZodError)) {
            return null;
        }
        return error.issues.find(issue => name === joinName(issue.path)) || null;
    }
    getErrorMessage(name, error) {
        var _a;
        return ((_a = this.getError(name, error)) === null || _a === void 0 ? void 0 : _a.message) || '';
    }
    getErrorMessages(error) {
        if (error instanceof ZodError) {
            // TODO: There's no information which field caused which error. We could
            // do some generic prefixing, e.g., `{name}: {message}`.
            return error.issues.map(issue => issue.message);
        }
        if (error instanceof Error) {
            return [error.message];
        }
        return [];
    }
    getField(name) {
        let field = this.schema;
        for (const key of joinName(null, name)) {
            if (field instanceof ZodDefault) {
                field = field.removeDefault();
            }
            else if (field instanceof ZodOptional) {
                field = field.unwrap();
            }
            if (key === '$' || key === '' + parseInt(key, 10)) {
                fieldInvariant(name, field instanceof ZodArray);
                field = field.element;
            }
            else {
                fieldInvariant(name, field instanceof ZodObject);
                field = field.shape[joinName.unescape(key)];
            }
        }
        return field;
    }
    getInitialValue(name) {
        var _a, _b;
        const field = this.getField(name);
        if (field instanceof ZodArray) {
            const item = this.getInitialValue(joinName(name, '$'));
            if (item === undefined) {
                return [];
            }
            const length = ((_a = field._def.minLength) === null || _a === void 0 ? void 0 : _a.value) || 0;
            return Array.from({ length }, () => item);
        }
        if (field instanceof ZodDefault) {
            return field._def.defaultValue();
        }
        if (field instanceof ZodEnum) {
            return field.options[0];
        }
        if (field instanceof ZodNativeEnum) {
            const values = Object.values(field.enum);
            return (_b = values.find(isNativeEnumValue)) !== null && _b !== void 0 ? _b : values[0];
        }
        if (field instanceof ZodObject) {
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
    // eslint-disable-next-line complexity
    getProps(name) {
        const props = Object.assign(Object.assign({}, (this.provideDefaultLabelFromFieldName && {
            label: upperFirst(lowerCase(joinName(null, name).slice(-1)[0])),
        })), { required: true });
        let field = this.getField(name);
        if (field instanceof ZodDefault) {
            field = field.removeDefault();
            props.required = false;
        }
        else if (field instanceof ZodOptional) {
            field = field.unwrap();
            props.required = false;
        }
        if (field instanceof ZodArray) {
            if (field._def.maxLength) {
                props.maxCount = field._def.maxLength.value;
            }
            if (field._def.minLength) {
                props.minCount = field._def.minLength.value;
            }
        }
        else if (field instanceof ZodEnum) {
            props.options = field.options.map(value => ({ value }));
        }
        else if (field instanceof ZodNativeEnum) {
            const values = Object.values(field.enum);
            const nativeValues = values.filter(isNativeEnumValue);
            props.options = (nativeValues.length ? nativeValues : values).map(value => ({ value }));
        }
        else if (field instanceof ZodNumber) {
            if (!field.isInt) {
                props.decimal = true;
            }
            const max = field.maxValue;
            if (max !== null) {
                props.max = max;
            }
            const min = field.minValue;
            if (min !== null) {
                props.min = min;
            }
            const step = field._def.checks.find((check) => check.kind === 'multipleOf');
            if (step) {
                props.step = step.value;
            }
        }
        return props;
    }
    getSubfields(name = '') {
        let field = this.getField(name);
        if (field instanceof ZodDefault) {
            field = field.removeDefault();
        }
        else if (field instanceof ZodOptional) {
            field = field.unwrap();
        }
        if (field instanceof ZodArray) {
            return ['$'];
        }
        if (field instanceof ZodObject) {
            return Object.keys(field.shape);
        }
        return [];
    }
    getType(name) {
        let field = this.getField(name);
        if (field instanceof ZodDefault) {
            field = field.removeDefault();
        }
        else if (field instanceof ZodOptional) {
            field = field.unwrap();
        }
        if (field instanceof ZodArray) {
            return Array;
        }
        if (field instanceof ZodBoolean) {
            return Boolean;
        }
        if (field instanceof ZodDate) {
            return Date;
        }
        if (field instanceof ZodEnum || field instanceof ZodString) {
            return String;
        }
        if (field instanceof ZodNativeEnum) {
            const values = Object.values(field.enum);
            return typeof values.find(isNativeEnumValue) === 'number'
                ? Number
                : String;
        }
        if (field instanceof ZodNumber) {
            return Number;
        }
        if (field instanceof ZodObject) {
            return Object;
        }
        invariant(false, 'Field "%s" has an unknown type', name);
    }
    getValidator() {
        return (model) => {
            // TODO: What about async schemas?
            // eslint-disable-next-line react/no-this-in-sfc
            const result = this.schema.safeParse(model);
            return result.success ? null : result.error;
        };
    }
}
