"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
/* istanbul ignore next */
const DateConstructor = (typeof global === 'object' ? global : window).Date;
const dateFormat = (value, type = 'datetime-local') => value === null || value === void 0 ? void 0 : value.toISOString().slice(0, type === 'datetime-local' ? -8 : -14);
function Date(_a) {
    var _b;
    var { className, disabled, error, errorMessage, icon, iconLeft, iconProps, id, inputRef, label, max, min, name, onChange, placeholder, readOnly, required, showInlineError, value, wrapClassName, type = 'datetime-local' } = _a, props = (0, tslib_1.__rest)(_a, ["className", "disabled", "error", "errorMessage", "icon", "iconLeft", "iconProps", "id", "inputRef", "label", "max", "min", "name", "onChange", "placeholder", "readOnly", "required", "showInlineError", "value", "wrapClassName", "type"]);
    return (react_1.default.createElement("div", Object.assign({ className: (0, classnames_1.default)(className, { disabled, error, required }, 'field') }, (0, uniforms_1.filterDOMProps)(props)),
        label && react_1.default.createElement("label", { htmlFor: id }, label),
        react_1.default.createElement("div", { className: (0, classnames_1.default)('ui', wrapClassName, { left: iconLeft, icon: icon || iconLeft }, 'input') },
            react_1.default.createElement("input", { disabled: disabled, id: id, max: dateFormat(max), min: dateFormat(min), name: name, onChange: event => {
                    const date = new DateConstructor(event.target.valueAsNumber);
                    if (date.getFullYear() < 10000) {
                        onChange(date);
                    }
                    else if (isNaN(event.target.valueAsNumber)) {
                        onChange(undefined);
                    }
                }, placeholder: placeholder, readOnly: readOnly, ref: inputRef, type: type, value: (_b = dateFormat(value, type)) !== null && _b !== void 0 ? _b : '' }),
            (icon || iconLeft) && (react_1.default.createElement("i", Object.assign({ className: `${icon || iconLeft} icon` }, iconProps)))),
        !!(error && showInlineError) && (react_1.default.createElement("div", { className: "ui red basic pointing label" }, errorMessage))));
}
exports.default = (0, uniforms_1.connectField)(Date, { kind: 'leaf' });
