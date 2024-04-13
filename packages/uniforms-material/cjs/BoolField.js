"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Checkbox_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Checkbox"));
const FormControlLabel_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/FormControlLabel"));
const FormGroup_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/FormGroup"));
const FormLabel_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/FormLabel"));
const Switch_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Switch"));
const useTheme_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/styles/useTheme"));
const omit_1 = (0, tslib_1.__importDefault)(require("lodash/omit"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const wrapField_1 = (0, tslib_1.__importDefault)(require("./wrapField"));
function Bool(props) {
    var _a;
    const { appearance, disabled, inputRef, label, legend, name, onChange, readOnly, value, } = props;
    const theme = (0, useTheme_1.default)();
    const formControlThemeProps = (_a = theme.props) === null || _a === void 0 ? void 0 : _a.MuiFormControl;
    const SelectionControl = appearance === 'checkbox' || appearance === undefined ? Checkbox_1.default : Switch_1.default;
    return (0, wrapField_1.default)(Object.assign(Object.assign(Object.assign(Object.assign({}, ((formControlThemeProps === null || formControlThemeProps === void 0 ? void 0 : formControlThemeProps.fullWidth) === undefined && {
        fullWidth: true,
    })), ((formControlThemeProps === null || formControlThemeProps === void 0 ? void 0 : formControlThemeProps.margin) === undefined && { margin: 'dense' })), props), { component: 'fieldset' }), legend && (react_1.default.createElement(FormLabel_1.default, { component: "legend", htmlFor: name }, legend)), react_1.default.createElement(FormGroup_1.default, null,
        react_1.default.createElement(FormControlLabel_1.default, { control: react_1.default.createElement(SelectionControl, Object.assign({ checked: !!value, name: name, onChange: event => !disabled &&
                    !readOnly &&
                    onChange &&
                    onChange(event.target.checked), ref: inputRef, value: name }, (0, omit_1.default)((0, uniforms_1.filterDOMProps)(props), ['helperText', 'fullWidth']))), label: label })));
}
exports.default = (0, uniforms_1.connectField)(Bool, { kind: 'leaf' });
