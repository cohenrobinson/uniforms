"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const FormControl_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/FormControl"));
const FormHelperText_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/FormHelperText"));
const useTheme_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/styles/useTheme"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
function Error(_a) {
    var _b, _c, _d;
    var { children, error, errorMessage, fullWidth, margin, variant } = _a, props = (0, tslib_1.__rest)(_a, ["children", "error", "errorMessage", "fullWidth", "margin", "variant"]);
    const theme = (0, useTheme_1.default)();
    const themeProps = (_b = theme.props) === null || _b === void 0 ? void 0 : _b.MuiFormControl;
    return !error ? null : (react_1.default.createElement(FormControl_1.default, { error: !!error, fullWidth: (_c = fullWidth !== null && fullWidth !== void 0 ? fullWidth : themeProps === null || themeProps === void 0 ? void 0 : themeProps.fullWidth) !== null && _c !== void 0 ? _c : true, margin: (_d = margin !== null && margin !== void 0 ? margin : themeProps === null || themeProps === void 0 ? void 0 : themeProps.margin) !== null && _d !== void 0 ? _d : 'dense', variant: variant !== null && variant !== void 0 ? variant : themeProps === null || themeProps === void 0 ? void 0 : themeProps.variant },
        react_1.default.createElement(FormHelperText_1.default, Object.assign({}, (0, uniforms_1.filterDOMProps)(props)), children || errorMessage)));
}
exports.default = (0, uniforms_1.connectField)(Error, {
    initialValue: false,
    kind: 'leaf',
});