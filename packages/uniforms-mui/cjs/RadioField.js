"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const FormControlLabel_1 = (0, tslib_1.__importDefault)(require("@mui/material/FormControlLabel"));
const FormLabel_1 = (0, tslib_1.__importDefault)(require("@mui/material/FormLabel"));
const Radio_1 = (0, tslib_1.__importDefault)(require("@mui/material/Radio"));
const RadioGroup_1 = (0, tslib_1.__importDefault)(require("@mui/material/RadioGroup"));
const omit_1 = (0, tslib_1.__importDefault)(require("lodash/omit"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const wrapField_1 = (0, tslib_1.__importDefault)(require("./wrapField"));
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Radio(_a) {
    var { options, disabled, fullWidth = true, id, inputRef, label, margin = 'dense', name, onChange, readOnly, row, value } = _a, props = (0, tslib_1.__rest)(_a, ["options", "disabled", "fullWidth", "id", "inputRef", "label", "margin", "name", "onChange", "readOnly", "row", "value"]);
    return (0, wrapField_1.default)(Object.assign(Object.assign({}, props), { component: 'fieldset', disabled, fullWidth, margin }), label && (react_1.default.createElement(FormLabel_1.default, { component: "legend", htmlFor: name }, label)), react_1.default.createElement(RadioGroup_1.default, { id: id, name: name, onChange: (event) => disabled || readOnly || onChange(event.target.value), ref: inputRef, row: row, value: value !== null && value !== void 0 ? value : '' }, options === null || options === void 0 ? void 0 : options.map(option => {
        var _a, _b;
        return (react_1.default.createElement(FormControlLabel_1.default, { control: react_1.default.createElement(Radio_1.default, Object.assign({ id: `${id}-${escape(option.value)}` }, (0, omit_1.default)((0, uniforms_1.filterDOMProps)(props), ['checkboxes', 'helperText']))), htmlFor: `${id}-${escape(option.value)}`, key: (_a = option.key) !== null && _a !== void 0 ? _a : option.value, label: (_b = option.label) !== null && _b !== void 0 ? _b : option.value, value: `${option.value}` }));
    })));
}
exports.default = (0, uniforms_1.connectField)(Radio, { kind: 'leaf' });
