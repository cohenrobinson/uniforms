"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const TextField_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/TextField"));
const useTheme_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/styles/useTheme"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const LongText = (_a) => {
    var _b, _c, _d;
    var { disabled, error, errorMessage, helperText, inputRef, label, name, onChange, placeholder, readOnly, showInlineError, type = 'text', value } = _a, props = (0, tslib_1.__rest)(_a, ["disabled", "error", "errorMessage", "helperText", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "showInlineError", "type", "value"]);
    const theme = (0, useTheme_1.default)();
    const themeProps = (_b = theme.props) === null || _b === void 0 ? void 0 : _b.MuiTextField;
    return (react_1.default.createElement(TextField_1.default, Object.assign({ disabled: disabled, error: !!error, fullWidth: (_c = themeProps === null || themeProps === void 0 ? void 0 : themeProps.fullWidth) !== null && _c !== void 0 ? _c : true, helperText: (!!error && showInlineError && errorMessage) || helperText, inputProps: Object.assign(Object.assign({}, themeProps === null || themeProps === void 0 ? void 0 : themeProps.inputProps), { readOnly }), label: label, margin: (_d = themeProps === null || themeProps === void 0 ? void 0 : themeProps.margin) !== null && _d !== void 0 ? _d : 'dense', multiline: true, name: name, onChange: event => disabled || onChange(event.target.value), placeholder: placeholder, ref: inputRef, type: type, value: value !== null && value !== void 0 ? value : '' }, (0, uniforms_1.filterDOMProps)(props))));
};
exports.default = (0, uniforms_1.connectField)(LongText, { kind: 'leaf' });
