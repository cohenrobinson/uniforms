"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
function Text(_a) {
    var { autoComplete, className, disabled, error, errorMessage, icon, iconLeft, iconProps, id, inputRef, label, name, onChange, placeholder, readOnly, required, showInlineError, type, value, wrapClassName } = _a, props = (0, tslib_1.__rest)(_a, ["autoComplete", "className", "disabled", "error", "errorMessage", "icon", "iconLeft", "iconProps", "id", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "required", "showInlineError", "type", "value", "wrapClassName"]);
    return (react_1.default.createElement("div", Object.assign({ className: (0, classnames_1.default)(className, { disabled, error, required }, 'field') }, (0, uniforms_1.filterDOMProps)(props)),
        label && react_1.default.createElement("label", { htmlFor: id }, label),
        react_1.default.createElement("div", { className: (0, classnames_1.default)('ui', wrapClassName, { left: iconLeft, icon: icon || iconLeft }, 'input') },
            react_1.default.createElement("input", { autoComplete: autoComplete, disabled: disabled, id: id, name: name, onChange: event => onChange(event.target.value), placeholder: placeholder, readOnly: readOnly, ref: inputRef, type: type, value: value !== null && value !== void 0 ? value : '' }),
            (icon || iconLeft) && (react_1.default.createElement("i", Object.assign({ className: `${icon || iconLeft} icon` }, iconProps)))),
        !!(error && showInlineError) && (react_1.default.createElement("div", { className: "ui red basic pointing label" }, errorMessage))));
}
Text.defaultProps = { type: 'text' };
exports.default = (0, uniforms_1.connectField)(Text, { kind: 'leaf' });
