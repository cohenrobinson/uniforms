import { __rest } from "tslib";
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
function Num(_a) {
    var { decimal, disabled, id, inputRef, label, max, min, name, onChange, placeholder, readOnly, step, value } = _a, props = __rest(_a, ["decimal", "disabled", "id", "inputRef", "label", "max", "min", "name", "onChange", "placeholder", "readOnly", "step", "value"]);
    return (React.createElement("div", Object.assign({}, filterDOMProps(props)),
        label && React.createElement("label", { htmlFor: id }, label),
        React.createElement("input", { disabled: disabled, id: id, max: max, min: min, name: name, onChange: event => {
                const parse = decimal ? parseFloat : parseInt;
                const value = parse(event.target.value);
                onChange(isNaN(value) ? undefined : value);
            }, placeholder: placeholder, readOnly: readOnly, ref: inputRef, step: step || (decimal ? 0.01 : 1), type: "number", value: value !== null && value !== void 0 ? value : '' })));
}
export default connectField(Num, { kind: 'leaf' });
