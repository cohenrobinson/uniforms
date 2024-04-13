"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const gridClassName_1 = (0, tslib_1.__importDefault)(require("./gridClassName"));
function SubmitField(_a) {
    var { className, disabled, inputClassName, inputRef, readOnly, value, wrapClassName } = _a, props = (0, tslib_1.__rest)(_a, ["className", "disabled", "inputClassName", "inputRef", "readOnly", "value", "wrapClassName"]);
    const { error, state: anyState } = (0, uniforms_1.useForm)();
    const state = anyState;
    const hasWrap = !!(state.grid || wrapClassName);
    const blockInput = (react_1.default.createElement("input", Object.assign({ className: inputClassName, disabled: disabled === undefined ? !!(error || state.disabled) : disabled, readOnly: readOnly, ref: inputRef, type: "submit" }, (value ? { value } : {}))));
    return (react_1.default.createElement("div", Object.assign({ className: (0, classnames_1.default)(className, {
            'is-invalid': error,
            row: state.grid,
        }) }, (0, uniforms_1.filterDOMProps)(props)),
        hasWrap && (react_1.default.createElement("span", { className: (0, classnames_1.default)('col-form-label', (0, gridClassName_1.default)(state.grid, 'label')) }, "\u00A0")),
        hasWrap && (react_1.default.createElement("div", { className: (0, classnames_1.default)(wrapClassName, (0, gridClassName_1.default)(state.grid, 'input')) }, blockInput)),
        !hasWrap && blockInput));
}
SubmitField.defaultProps = { inputClassName: 'btn btn-primary' };
exports.default = SubmitField;
