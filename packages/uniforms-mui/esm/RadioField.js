import { __rest } from "tslib";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import RadioMaterial from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import omit from 'lodash/omit';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import wrapField from './wrapField';
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Radio(_a) {
    var { options, disabled, fullWidth = true, id, inputRef, label, margin = 'dense', name, onChange, readOnly, row, value } = _a, props = __rest(_a, ["options", "disabled", "fullWidth", "id", "inputRef", "label", "margin", "name", "onChange", "readOnly", "row", "value"]);
    return wrapField(Object.assign(Object.assign({}, props), { component: 'fieldset', disabled, fullWidth, margin }), label && (React.createElement(FormLabel, { component: "legend", htmlFor: name }, label)), React.createElement(RadioGroup, { id: id, name: name, onChange: (event) => disabled || readOnly || onChange(event.target.value), ref: inputRef, row: row, value: value !== null && value !== void 0 ? value : '' }, options === null || options === void 0 ? void 0 : options.map(option => {
        var _a, _b;
        return (React.createElement(FormControlLabel, { control: React.createElement(RadioMaterial, Object.assign({ id: `${id}-${escape(option.value)}` }, omit(filterDOMProps(props), ['checkboxes', 'helperText']))), htmlFor: `${id}-${escape(option.value)}`, key: (_a = option.key) !== null && _a !== void 0 ? _a : option.value, label: (_b = option.label) !== null && _b !== void 0 ? _b : option.value, value: `${option.value}` }));
    })));
}
export default connectField(Radio, { kind: 'leaf' });