"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useField = void 0;
const tslib_1 = require("tslib");
const get_1 = (0, tslib_1.__importDefault)(require("lodash/get"));
const mapValues_1 = (0, tslib_1.__importDefault)(require("lodash/mapValues"));
const react_1 = require("react");
const joinName_1 = require("./joinName");
const useForm_1 = require("./useForm");
function useField(fieldName, props, options) {
    var _a, _b, _c;
    const context = (0, useForm_1.useForm)();
    const name = (0, joinName_1.joinName)((options === null || options === void 0 ? void 0 : options.absoluteName) ? '' : context.name, fieldName);
    const field = context.schema.getField(name);
    const usesInitialValue = (options === null || options === void 0 ? void 0 : options.initialValue) !== false;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const onChangeCalled = usesInitialValue ? (0, react_1.useRef)(false) : { current: false };
    const state = (0, mapValues_1.default)(context.state, (prev, key) => {
        const next = props[key];
        return next !== null && next !== undefined ? !!next : prev;
    });
    const changed = !!(0, get_1.default)(context.changedMap, name);
    const error = context.schema.getError(name, context.error);
    const errorMessage = context.schema.getErrorMessage(name, context.error);
    const fieldType = context.schema.getType(name);
    const fields = context.schema.getSubfields(name);
    const schemaProps = context.schema.getProps(name);
    const label = (_b = (_a = props.label) !== null && _a !== void 0 ? _a : schemaProps.label) !== null && _b !== void 0 ? _b : '';
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const id = (0, react_1.useMemo)(() => context.randomId(), []);
    const onChange = (0, react_1.useCallback)((value, key = name) => {
        onChangeCalled.current = true;
        context.onChange(key, value);
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [context.onChange, name]);
    // @ts-expect-error The `props` should be typed more precisely.
    const valueFromModel = (0, get_1.default)(context.model, name);
    let initialValue;
    let value = (_c = props.value) !== null && _c !== void 0 ? _c : valueFromModel;
    if (usesInitialValue) {
        if (!onChangeCalled.current) {
            if (value === undefined) {
                value = context.schema.getInitialValue(name);
                initialValue = value;
            }
            else if (props.value !== undefined && props.value !== valueFromModel) {
                initialValue = props.value;
            }
        }
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, react_1.useEffect)(() => {
            var _a;
            const required = (_a = props.required) !== null && _a !== void 0 ? _a : schemaProps.required;
            if (required && initialValue !== undefined) {
                onChange(initialValue);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
    }
    const fieldProps = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ id }, state), { changed,
        error,
        errorMessage,
        field,
        fieldType,
        fields,
        onChange,
        value }), schemaProps), props), { label,
        name });
    return [fieldProps, context];
}
exports.useField = useField;
