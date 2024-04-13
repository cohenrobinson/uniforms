import { __rest } from "tslib";
import React from 'react';
import { filterDOMProps, useForm } from 'uniforms';
export default function SubmitField(_a) {
    var { disabled, inputRef, readOnly, value } = _a, props = __rest(_a, ["disabled", "inputRef", "readOnly", "value"]);
    const { error, state } = useForm();
    return (React.createElement("input", Object.assign({ disabled: disabled === undefined ? !!(error || state.disabled) : disabled, readOnly: readOnly, ref: inputRef, type: "submit" }, (value ? { value } : {}), filterDOMProps(props))));
}
