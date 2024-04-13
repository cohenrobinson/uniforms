"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Checkbox_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Checkbox"));
const FormControlLabel_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/FormControlLabel"));
const FormGroup_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/FormGroup"));
const FormLabel_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/FormLabel"));
const MenuItem_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/MenuItem"));
const Radio_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Radio"));
const RadioGroup_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/RadioGroup"));
const Switch_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Switch"));
const TextField_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/TextField"));
const useTheme_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/styles/useTheme"));
const omit_1 = (0, tslib_1.__importDefault)(require("lodash/omit"));
const xor_1 = (0, tslib_1.__importDefault)(require("lodash/xor"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const wrapField_1 = (0, tslib_1.__importDefault)(require("./wrapField"));
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
// eslint-disable-next-line complexity
function Select(props) {
    var _a, _b, _c, _d, _e, _f;
    const theme = (0, useTheme_1.default)();
    const formControlThemeProps = (_a = theme.props) === null || _a === void 0 ? void 0 : _a.MuiFormControl;
    const value = (_b = props.value) !== null && _b !== void 0 ? _b : '';
    if (props.checkboxes) {
        const { options, disabled, fieldType, id, inputRef, label, legend, name, onChange, readOnly, } = props;
        const appearance = (_c = props.appearance) !== null && _c !== void 0 ? _c : 'checkbox';
        const SelectionControl = appearance === 'checkbox' ? Checkbox_1.default : Switch_1.default;
        const filteredProps = (0, omit_1.default)((0, uniforms_1.filterDOMProps)(props), [
            'checkboxes',
            'disableItem',
            'id',
            'inputRef',
        ]);
        const children = fieldType !== Array ? (react_1.default.createElement(RadioGroup_1.default, { id: id, name: name, onChange: event => disabled || readOnly || onChange(event.target.value), ref: inputRef, value: value !== null && value !== void 0 ? value : '' }, options === null || options === void 0 ? void 0 : options.map(option => {
            var _a, _b, _c;
            return (react_1.default.createElement(FormControlLabel_1.default, { control: react_1.default.createElement(Radio_1.default, Object.assign({ id: `${id}-${(_a = option.key) !== null && _a !== void 0 ? _a : escape(option.value)}` }, filteredProps)), disabled: option.disabled || disabled, key: (_b = option.key) !== null && _b !== void 0 ? _b : option.value, label: (_c = option.label) !== null && _c !== void 0 ? _c : option.value, value: option.value }));
        }))) : (react_1.default.createElement(FormGroup_1.default, { id: id }, options === null || options === void 0 ? void 0 : options.map(option => {
            var _a, _b, _c;
            return (react_1.default.createElement(FormControlLabel_1.default, { control: react_1.default.createElement(SelectionControl, Object.assign({ checked: value.includes(option.value), id: `${id}-${(_a = option.key) !== null && _a !== void 0 ? _a : escape(option.value)}`, name: name, onChange: () => disabled || readOnly || onChange((0, xor_1.default)([option.value], value)), ref: inputRef, value: name }, filteredProps)), disabled: option.disabled || disabled, key: (_b = option.key) !== null && _b !== void 0 ? _b : option.value, label: (_c = option.label) !== null && _c !== void 0 ? _c : option.value }));
        })));
        return (0, wrapField_1.default)(Object.assign(Object.assign(Object.assign({}, formControlThemeProps), props), { component: 'fieldset' }), (legend || label) && (react_1.default.createElement(FormLabel_1.default, { component: "legend" }, legend || label)), children);
    }
    const textFieldThemeProps = (_d = theme.props) === null || _d === void 0 ? void 0 : _d.MuiTextField;
    const { options, disabled, error, errorMessage, fieldType, fullWidth = (_e = textFieldThemeProps === null || textFieldThemeProps === void 0 ? void 0 : textFieldThemeProps.fullWidth) !== null && _e !== void 0 ? _e : true, helperText, id, InputLabelProps, inputProps, label, labelProps, margin = (_f = textFieldThemeProps === null || textFieldThemeProps === void 0 ? void 0 : textFieldThemeProps.margin) !== null && _f !== void 0 ? _f : 'dense', name, native, onChange, placeholder, readOnly, required, showInlineError, variant, textFieldProps, } = props;
    const Item = native ? 'option' : MenuItem_1.default;
    const hasPlaceholder = !!placeholder;
    const hasValue = value !== '' && value !== undefined;
    /*
    Never was added because these 2 variables cause omit to fall into an unpleasant overload.
    So we need to use a trick to reduce the confusion of handling types
    */
    const filteredProps = (0, omit_1.default)((0, uniforms_1.filterDOMProps)(props), [
        'checkboxes',
        'disableItem',
        'fullWidth',
        'helperText',
        'margin',
        'textFieldProps',
        'variant',
    ]);
    return (react_1.default.createElement(TextField_1.default, Object.assign({ disabled: disabled, error: !!error, fullWidth: fullWidth, helperText: (!!error && showInlineError && errorMessage) || helperText, InputLabelProps: Object.assign(Object.assign({ shrink: !!label && (hasPlaceholder || hasValue) }, labelProps), InputLabelProps), label: label, margin: margin, onChange: event => disabled ||
            readOnly ||
            onChange(event.target.value !== '' ? event.target.value : undefined), required: required, select: true, SelectProps: Object.assign({ displayEmpty: hasPlaceholder, inputProps: Object.assign({ name, id }, inputProps), multiple: fieldType === Array || undefined, native }, filteredProps), value: native && !value ? '' : value, variant: variant }, textFieldProps),
        (hasPlaceholder || !required || !hasValue) && (react_1.default.createElement(Item, { value: "", disabled: !!required }, placeholder || label)), options === null || options === void 0 ? void 0 :
        options.map(option => {
            var _a, _b;
            return (react_1.default.createElement(Item, { disabled: option.disabled, key: (_a = option.key) !== null && _a !== void 0 ? _a : option.value, value: option.value }, (_b = option.label) !== null && _b !== void 0 ? _b : option.value));
        })));
}
exports.default = (0, uniforms_1.connectField)(Select, { kind: 'leaf' });
