import { __rest } from "tslib";
import classnames from 'classnames';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
function Bool(_a) {
    var { className, disabled, error, errorMessage, id, inputRef, label, name, onChange, readOnly, required, showInlineError, value, wrapClassName } = _a, props = __rest(_a, ["className", "disabled", "error", "errorMessage", "id", "inputRef", "label", "name", "onChange", "readOnly", "required", "showInlineError", "value", "wrapClassName"]);
    return (React.createElement("div", Object.assign({ className: classnames(className, { disabled, error, required }, 'field') }, filterDOMProps(props)),
        React.createElement("div", { className: classnames('ui', wrapClassName, !label && 'fitted', 'checkbox') },
            React.createElement("input", { checked: value || false, className: "hidden", disabled: disabled, id: id, name: name, onChange: () => {
                    if (!readOnly) {
                        onChange(!value);
                    }
                }, ref: inputRef, type: "checkbox" }),
            React.createElement("label", { htmlFor: id }, label || null)),
        !!(error && showInlineError) && (React.createElement("div", null,
            React.createElement("div", { className: "ui red basic pointing label" }, errorMessage)))));
}
export default connectField(Bool, { kind: 'leaf' });
