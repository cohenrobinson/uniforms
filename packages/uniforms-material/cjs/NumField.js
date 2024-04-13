"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const TextField_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/TextField"));
const useTheme_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/styles/useTheme"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
function Num(_a) {
    var _b, _c, _d, _e;
    var { decimal, disabled, error, errorMessage, helperText, inputProps, inputRef, label, max, min, name, onChange, readOnly, placeholder, showInlineError, step = decimal ? 0.01 : 1, value } = _a, props = (0, tslib_1.__rest)(_a, ["decimal", "disabled", "error", "errorMessage", "helperText", "inputProps", "inputRef", "label", "max", "min", "name", "onChange", "readOnly", "placeholder", "showInlineError", "step", "value"]);
    const theme = (0, useTheme_1.default)();
    const themeProps = (_b = theme.props) === null || _b === void 0 ? void 0 : _b.MuiTextField;
    return (react_1.default.createElement(TextField_1.default, Object.assign({ disabled: disabled, error: !!error, fullWidth: (_c = themeProps === null || themeProps === void 0 ? void 0 : themeProps.fullWidth) !== null && _c !== void 0 ? _c : true, helperText: (!!error && showInlineError && errorMessage) || helperText, inputProps: Object.assign(Object.assign(Object.assign({}, ((_d = themeProps === null || themeProps === void 0 ? void 0 : themeProps.inputProps) !== null && _d !== void 0 ? _d : {})), { min,
            max,
            readOnly,
            step }), inputProps), label: label, margin: (_e = themeProps === null || themeProps === void 0 ? void 0 : themeProps.margin) !== null && _e !== void 0 ? _e : 'dense', name: name, onChange: event => {
            const parse = decimal ? parseFloat : parseInt;
            const value = parse(event.target.value);
            onChange(isNaN(value) ? undefined : value);
        }, placeholder: placeholder, ref: inputRef, type: "number", value: value !== null && value !== void 0 ? value : '' }, (0, uniforms_1.filterDOMProps)(props))));
}
exports.default = (0, uniforms_1.connectField)(Num, { kind: 'leaf' });
