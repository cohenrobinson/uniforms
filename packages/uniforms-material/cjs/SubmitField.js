"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Button_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Button"));
const useTheme_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/styles/useTheme"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
function SubmitField(_a) {
    var _b, _c;
    var { children, disabled, inputRef, label = 'Submit', value } = _a, props = (0, tslib_1.__rest)(_a, ["children", "disabled", "inputRef", "label", "value"]);
    const { error, state } = (0, uniforms_1.useForm)();
    const theme = (0, useTheme_1.default)();
    const themeProps = (_b = theme.props) === null || _b === void 0 ? void 0 : _b.MuiButton;
    return (react_1.default.createElement(Button_1.default, Object.assign({ disabled: disabled === undefined ? !!(error || state.disabled) : disabled, ref: inputRef, type: "submit", value: value, variant: (_c = themeProps === null || themeProps === void 0 ? void 0 : themeProps.variant) !== null && _c !== void 0 ? _c : 'contained' }, (0, uniforms_1.filterDOMProps)(props)), children || label));
}
exports.default = SubmitField;
