"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
function LongText(_a) {
    var { className, disabled, error, errorMessage, id, inputRef, label, name, onChange, placeholder, readOnly, required, showInlineError, value } = _a, props = (0, tslib_1.__rest)(_a, ["className", "disabled", "error", "errorMessage", "id", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "required", "showInlineError", "value"]);
    return (react_1.default.createElement("div", Object.assign({ className: (0, classnames_1.default)(className, { disabled, error, required }, 'field') }, (0, uniforms_1.filterDOMProps)(props)),
        label && react_1.default.createElement("label", { htmlFor: id }, label),
        react_1.default.createElement("textarea", { disabled: disabled, id: id, name: name, onChange: event => onChange(event.target.value), placeholder: placeholder, readOnly: readOnly, ref: inputRef, value: value !== null && value !== void 0 ? value : '' }),
        !!(error && showInlineError) && (react_1.default.createElement("div", { className: "ui red basic pointing label" }, errorMessage))));
}
exports.default = (0, uniforms_1.connectField)(LongText, { kind: 'leaf' });