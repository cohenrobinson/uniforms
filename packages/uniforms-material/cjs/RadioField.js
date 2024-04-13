"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const FormControlLabel_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/FormControlLabel"));
const FormLabel_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/FormLabel"));
const Radio_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Radio"));
const RadioGroup_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/RadioGroup"));
const useTheme_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/styles/useTheme"));
const omit_1 = (0, tslib_1.__importDefault)(require("lodash/omit"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const wrapField_1 = (0, tslib_1.__importDefault)(require("./wrapField"));
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Radio(_a) {
    var _b, _c, _d;
    var { options, disabled, id, inputRef, label, name, onChange, readOnly, row, value } = _a, props = (0, tslib_1.__rest)(_a, ["options", "disabled", "id", "inputRef", "label", "name", "onChange", "readOnly", "row", "value"]);
    const theme = (0, useTheme_1.default)();
    const formControlThemeProps = (_b = theme.props) === null || _b === void 0 ? void 0 : _b.MuiFormControl;
    return (0, wrapField_1.default)(Object.assign(Object.assign({ fullWidth: (_c = formControlThemeProps === null || formControlThemeProps === void 0 ? void 0 : formControlThemeProps.fullWidth) !== null && _c !== void 0 ? _c : true, margin: (_d = formControlThemeProps === null || formControlThemeProps === void 0 ? void 0 : formControlThemeProps.margin) !== null && _d !== void 0 ? _d : 'dense' }, props), { component: 'fieldset', disabled }), label && (react_1.default.createElement(FormLabel_1.default, { component: "legend", htmlFor: name }, label)), react_1.default.createElement(RadioGroup_1.default, { id: id, name: name, onChange: (event) => disabled || readOnly || onChange(event.target.value), ref: inputRef, row: row, value: value !== null && value !== void 0 ? value : '' }, options === null || options === void 0 ? void 0 : options.map(item => {
        var _a, _b;
        return (react_1.default.createElement(FormControlLabel_1.default, { control: react_1.default.createElement(Radio_1.default, Object.assign({ id: `${id}-${escape(item.value)}` }, (0, omit_1.default)((0, uniforms_1.filterDOMProps)(props), ['checkboxes', 'helperText']))), htmlFor: `${id}-${escape(item.value)}`, key: (_a = item.key) !== null && _a !== void 0 ? _a : item.value, label: (_b = item.label) !== null && _b !== void 0 ? _b : item.value, value: `${item.value}` }));
    })));
}
exports.default = (0, uniforms_1.connectField)(Radio, { kind: 'leaf' });
