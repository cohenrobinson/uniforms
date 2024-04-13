import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import useTheme from '@material-ui/core/styles/useTheme';
import omit from 'lodash/omit';
import xor from 'lodash/xor';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import wrapField from './wrapField';
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
// eslint-disable-next-line complexity
function Select(props) {
    var _a, _b, _c, _d, _e, _f;
    const theme = useTheme();
    const formControlThemeProps = (_a = theme.props) === null || _a === void 0 ? void 0 : _a.MuiFormControl;
    const value = (_b = props.value) !== null && _b !== void 0 ? _b : '';
    if (props.checkboxes) {
        const { options, disabled, fieldType, id, inputRef, label, legend, name, onChange, readOnly, } = props;
        const appearance = (_c = props.appearance) !== null && _c !== void 0 ? _c : 'checkbox';
        const SelectionControl = appearance === 'checkbox' ? Checkbox : Switch;
        const filteredProps = omit(filterDOMProps(props), [
            'checkboxes',
            'disableItem',
            'id',
            'inputRef',
        ]);
        const children = fieldType !== Array ? (React.createElement(RadioGroup, { id: id, name: name, onChange: event => disabled || readOnly || onChange(event.target.value), ref: inputRef, value: value !== null && value !== void 0 ? value : '' }, options === null || options === void 0 ? void 0 : options.map(option => {
            var _a, _b, _c;
            return (React.createElement(FormControlLabel, { control: React.createElement(Radio, Object.assign({ id: `${id}-${(_a = option.key) !== null && _a !== void 0 ? _a : escape(option.value)}` }, filteredProps)), disabled: option.disabled || disabled, key: (_b = option.key) !== null && _b !== void 0 ? _b : option.value, label: (_c = option.label) !== null && _c !== void 0 ? _c : option.value, value: option.value }));
        }))) : (React.createElement(FormGroup, { id: id }, options === null || options === void 0 ? void 0 : options.map(option => {
            var _a, _b, _c;
            return (React.createElement(FormControlLabel, { control: React.createElement(SelectionControl, Object.assign({ checked: value.includes(option.value), id: `${id}-${(_a = option.key) !== null && _a !== void 0 ? _a : escape(option.value)}`, name: name, onChange: () => disabled || readOnly || onChange(xor([option.value], value)), ref: inputRef, value: name }, filteredProps)), disabled: option.disabled || disabled, key: (_b = option.key) !== null && _b !== void 0 ? _b : option.value, label: (_c = option.label) !== null && _c !== void 0 ? _c : option.value }));
        })));
        return wrapField(Object.assign(Object.assign(Object.assign({}, formControlThemeProps), props), { component: 'fieldset' }), (legend || label) && (React.createElement(FormLabel, { component: "legend" }, legend || label)), children);
    }
    const textFieldThemeProps = (_d = theme.props) === null || _d === void 0 ? void 0 : _d.MuiTextField;
    const { options, disabled, error, errorMessage, fieldType, fullWidth = (_e = textFieldThemeProps === null || textFieldThemeProps === void 0 ? void 0 : textFieldThemeProps.fullWidth) !== null && _e !== void 0 ? _e : true, helperText, id, InputLabelProps, inputProps, label, labelProps, margin = (_f = textFieldThemeProps === null || textFieldThemeProps === void 0 ? void 0 : textFieldThemeProps.margin) !== null && _f !== void 0 ? _f : 'dense', name, native, onChange, placeholder, readOnly, required, showInlineError, variant, textFieldProps, } = props;
    const Item = native ? 'option' : MenuItem;
    const hasPlaceholder = !!placeholder;
    const hasValue = value !== '' && value !== undefined;
    /*
    Never was added because these 2 variables cause omit to fall into an unpleasant overload.
    So we need to use a trick to reduce the confusion of handling types
    */
    const filteredProps = omit(filterDOMProps(props), [
        'checkboxes',
        'disableItem',
        'fullWidth',
        'helperText',
        'margin',
        'textFieldProps',
        'variant',
    ]);
    return (React.createElement(TextField, Object.assign({ disabled: disabled, error: !!error, fullWidth: fullWidth, helperText: (!!error && showInlineError && errorMessage) || helperText, InputLabelProps: Object.assign(Object.assign({ shrink: !!label && (hasPlaceholder || hasValue) }, labelProps), InputLabelProps), label: label, margin: margin, onChange: event => disabled ||
            readOnly ||
            onChange(event.target.value !== '' ? event.target.value : undefined), required: required, select: true, SelectProps: Object.assign({ displayEmpty: hasPlaceholder, inputProps: Object.assign({ name, id }, inputProps), multiple: fieldType === Array || undefined, native }, filteredProps), value: native && !value ? '' : value, variant: variant }, textFieldProps),
        (hasPlaceholder || !required || !hasValue) && (React.createElement(Item, { value: "", disabled: !!required }, placeholder || label)), options === null || options === void 0 ? void 0 :
        options.map(option => {
            var _a, _b;
            return (React.createElement(Item, { disabled: option.disabled, key: (_a = option.key) !== null && _a !== void 0 ? _a : option.value, value: option.value }, (_b = option.label) !== null && _b !== void 0 ? _b : option.value));
        })));
}
export default connectField(Select, { kind: 'leaf' });
