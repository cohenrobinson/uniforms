import { __rest } from "tslib";
import classnames from 'classnames';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
/* istanbul ignore next */
const DateConstructor = (typeof global === 'object' ? global : window).Date;
const dateFormat = (value, type = 'datetime-local') => value === null || value === void 0 ? void 0 : value.toISOString().slice(0, type === 'datetime-local' ? -8 : -14);
function Date(_a) {
    var _b;
    var { className, disabled, error, errorMessage, icon, iconLeft, iconProps, id, inputRef, label, max, min, name, onChange, placeholder, readOnly, required, showInlineError, value, wrapClassName, type = 'datetime-local' } = _a, props = __rest(_a, ["className", "disabled", "error", "errorMessage", "icon", "iconLeft", "iconProps", "id", "inputRef", "label", "max", "min", "name", "onChange", "placeholder", "readOnly", "required", "showInlineError", "value", "wrapClassName", "type"]);
    return (React.createElement("div", Object.assign({ className: classnames(className, { disabled, error, required }, 'field') }, filterDOMProps(props)),
        label && React.createElement("label", { htmlFor: id }, label),
        React.createElement("div", { className: classnames('ui', wrapClassName, { left: iconLeft, icon: icon || iconLeft }, 'input') },
            React.createElement("input", { disabled: disabled, id: id, max: dateFormat(max), min: dateFormat(min), name: name, onChange: event => {
                    const date = new DateConstructor(event.target.valueAsNumber);
                    if (date.getFullYear() < 10000) {
                        onChange(date);
                    }
                    else if (isNaN(event.target.valueAsNumber)) {
                        onChange(undefined);
                    }
                }, placeholder: placeholder, readOnly: readOnly, ref: inputRef, type: type, value: (_b = dateFormat(value, type)) !== null && _b !== void 0 ? _b : '' }),
            (icon || iconLeft) && (React.createElement("i", Object.assign({ className: `${icon || iconLeft} icon` }, iconProps)))),
        !!(error && showInlineError) && (React.createElement("div", { className: "ui red basic pointing label" }, errorMessage))));
}
export default connectField(Date, { kind: 'leaf' });