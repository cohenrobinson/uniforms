import classnames from 'classnames';
import React from 'react';
import { connectField } from 'uniforms';
import wrapField from './wrapField';
function Bool(props) {
    const { disabled, inline, inputClassName, label, labelBefore, name, onChange, readOnly, value, } = props;
    return wrapField(Object.assign(Object.assign({}, props), { label: labelBefore }), React.createElement("div", { className: classnames(inputClassName, `checkbox${inline ? '-inline' : ''}`) },
        React.createElement("label", { htmlFor: props.id },
            React.createElement("input", { checked: value || false, disabled: disabled, id: props.id, name: name, onChange: () => {
                    if (!readOnly) {
                        onChange(!value);
                    }
                }, ref: props.inputRef, type: "checkbox" }),
            "\u00A0",
            label)));
}
export default connectField(Bool, { kind: 'leaf' });
