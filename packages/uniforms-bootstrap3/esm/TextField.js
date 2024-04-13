import classnames from 'classnames';
import omit from 'lodash/omit';
import React from 'react';
import { connectField } from 'uniforms';
import wrapField from './wrapField';
function Text(props) {
    var _a, _b;
    return wrapField(Object.assign({ feedbackable: true }, omit(props, ['autoComplete'])), React.createElement("input", { autoComplete: props.autoComplete, className: classnames(props.inputClassName, 'form-control', {
            'form-control-danger': props.error,
        }), disabled: props.disabled, id: props.id, name: props.name, onChange: event => props.onChange(event.target.value), placeholder: props.placeholder, readOnly: props.readOnly, ref: props.inputRef, type: (_a = props.type) !== null && _a !== void 0 ? _a : 'text', value: (_b = props.value) !== null && _b !== void 0 ? _b : '' }));
}
export default connectField(Text, { kind: 'leaf' });
