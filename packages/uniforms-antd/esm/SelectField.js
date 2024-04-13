import CheckboxGroup from 'antd/lib/checkbox/Group';
import RadioGroup from 'antd/lib/radio/group';
import SelectAntD from 'antd/lib/select';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import wrapField from './wrapField';
function Select(props) {
    var _a, _b;
    const Group = props.fieldType === Array ? CheckboxGroup : RadioGroup;
    const filteredDOMProps = filterDOMProps(props);
    return wrapField(props, props.checkboxes ? (React.createElement("span", Object.assign({}, filteredDOMProps),
        React.createElement(Group, Object.assign({}, filteredDOMProps, { disabled: props.disabled, name: props.name, onChange: (eventOrValue) => {
                if (!props.readOnly) {
                    props.onChange(
                    // FIXME: Argument type depends on `props.fieldType`.
                    props.fieldType === Array
                        ? eventOrValue
                        : eventOrValue.target.value);
                }
            }, options: (_a = props.options) === null || _a === void 0 ? void 0 : _a.map(option => {
                var _a;
                return (Object.assign(Object.assign({}, option), { label: (_a = option.label) !== null && _a !== void 0 ? _a : option.value }));
            }), value: props.value })))) : (React.createElement(SelectAntD, Object.assign({ allowClear: !props.required, disabled: props.disabled, mode: props.fieldType === Array ? 'multiple' : undefined, name: props.name, onChange: value => {
            if (!props.readOnly) {
                props.onChange(value);
            }
        }, placeholder: props.placeholder, 
        // @ts-expect-error: Incorrect `inputRef` type.
        ref: props.inputRef, value: props.fieldType === Array
            ? Array.isArray(props.value)
                ? props.value.filter(value => value !== undefined)
                : []
            : props.value }, filteredDOMProps), (_b = props.options) === null || _b === void 0 ? void 0 : _b.map(option => {
        var _a, _b, _c;
        return (React.createElement(SelectAntD.Option, { disabled: option.disabled, key: (_a = option.key) !== null && _a !== void 0 ? _a : option.value, value: option.value, id: `${props.id}-${(_b = option.key) !== null && _b !== void 0 ? _b : escape(option.value)}` }, (_c = option.label) !== null && _c !== void 0 ? _c : option.value));
    }))));
}
export default connectField(Select, { kind: 'leaf' });
