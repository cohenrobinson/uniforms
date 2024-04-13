"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
function Bool(_a) {
    var { className, disabled, error, errorMessage, id, inputRef, label, name, onChange, readOnly, required, showInlineError, value, wrapClassName } = _a, props = (0, tslib_1.__rest)(_a, ["className", "disabled", "error", "errorMessage", "id", "inputRef", "label", "name", "onChange", "readOnly", "required", "showInlineError", "value", "wrapClassName"]);
    return (react_1.default.createElement("div", Object.assign({ className: (0, classnames_1.default)(className, { disabled, error, required }, 'field') }, (0, uniforms_1.filterDOMProps)(props)),
        react_1.default.createElement("div", { className: (0, classnames_1.default)('ui', wrapClassName, !label && 'fitted', 'checkbox') },
            react_1.default.createElement("input", { checked: value || false, className: "hidden", disabled: disabled, id: id, name: name, onChange: () => {
                    if (!readOnly) {
                        onChange(!value);
                    }
                }, ref: inputRef, type: "checkbox" }),
            react_1.default.createElement("label", { htmlFor: id }, label || null)),
        !!(error && showInlineError) && (react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: "ui red basic pointing label" }, errorMessage)))));
}
exports.default = (0, uniforms_1.connectField)(Bool, { kind: 'leaf' });
