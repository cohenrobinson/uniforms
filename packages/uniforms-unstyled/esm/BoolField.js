import { __rest } from "tslib";
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
function Bool(_a) {
    var { disabled, id, inputRef, label, name, onChange, readOnly, value } = _a, props = __rest(_a, ["disabled", "id", "inputRef", "label", "name", "onChange", "readOnly", "value"]);
    return (React.createElement("div", Object.assign({}, filterDOMProps(props)),
        React.createElement("input", { checked: value || false, disabled: disabled, id: id, name: name, onChange: () => !disabled && !readOnly && onChange(!value), ref: inputRef, type: "checkbox" }),
        label && React.createElement("label", { htmlFor: id }, label)));
}
export default connectField(Bool, { kind: 'leaf' });
