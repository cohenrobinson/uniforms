import { __rest } from "tslib";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RadioMaterial from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import useTheme from '@material-ui/core/styles/useTheme';
import omit from 'lodash/omit';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import wrapField from './wrapField';
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Radio(_a) {
    var _b, _c, _d;
    var { options, disabled, id, inputRef, label, name, onChange, readOnly, row, value } = _a, props = __rest(_a, ["options", "disabled", "id", "inputRef", "label", "name", "onChange", "readOnly", "row", "value"]);
    const theme = useTheme();
    const formControlThemeProps = (_b = theme.props) === null || _b === void 0 ? void 0 : _b.MuiFormControl;
    return wrapField(Object.assign(Object.assign({ fullWidth: (_c = formControlThemeProps === null || formControlThemeProps === void 0 ? void 0 : formControlThemeProps.fullWidth) !== null && _c !== void 0 ? _c : true, margin: (_d = formControlThemeProps === null || formControlThemeProps === void 0 ? void 0 : formControlThemeProps.margin) !== null && _d !== void 0 ? _d : 'dense' }, props), { component: 'fieldset', disabled }), label && (React.createElement(FormLabel, { component: "legend", htmlFor: name }, label)), React.createElement(RadioGroup, { id: id, name: name, onChange: (event) => disabled || readOnly || onChange(event.target.value), ref: inputRef, row: row, value: value !== null && value !== void 0 ? value : '' }, options === null || options === void 0 ? void 0 : options.map(item => {
        var _a, _b;
        return (React.createElement(FormControlLabel, { control: React.createElement(RadioMaterial, Object.assign({ id: `${id}-${escape(item.value)}` }, omit(filterDOMProps(props), ['checkboxes', 'helperText']))), htmlFor: `${id}-${escape(item.value)}`, key: (_a = item.key) !== null && _a !== void 0 ? _a : item.value, label: (_b = item.label) !== null && _b !== void 0 ? _b : item.value, value: `${item.value}` }));
    })));
}
export default connectField(Radio, { kind: 'leaf' });
