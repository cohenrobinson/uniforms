import classnames from 'classnames';
import React from 'react';
import { connectField } from 'uniforms';
import wrapField from './wrapField';
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Radio(props) {
    var _a;
    return wrapField(props, (_a = props.options) === null || _a === void 0 ? void 0 : _a.map(item => {
        var _a, _b, _c, _d;
        return (React.createElement("div", { key: (_a = item.key) !== null && _a !== void 0 ? _a : item.value, className: classnames(props.inputClassName, 'form-check', {
                'text-danger': props.error,
                'text-success': !props.error && props.changed,
                'form-check-inline': props.inline,
            }) },
            React.createElement("label", { htmlFor: `${props.id}-${(_b = item.key) !== null && _b !== void 0 ? _b : escape(item.value)}`, className: "form-check-label" },
                React.createElement("input", { checked: item.value === props.value, className: "form-check-input", disabled: props.disabled, id: `${props.id}-${(_c = item.key) !== null && _c !== void 0 ? _c : escape(item.value)}`, name: props.name, onChange: () => {
                        if (!props.readOnly) {
                            props.onChange(item.value);
                        }
                    }, type: "radio" }),
                ' ', (_d = item.label) !== null && _d !== void 0 ? _d : item.value)));
    }));
}
export default connectField(Radio, { kind: 'leaf' });
