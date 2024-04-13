import { __rest } from "tslib";
import TextField from '@material-ui/core/TextField';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
/* istanbul ignore next */
const DateConstructor = (typeof global === 'object' ? global : window).Date;
const dateFormat = (value, type = 'datetime-local') => value === null || value === void 0 ? void 0 : value.toISOString().slice(0, type === 'datetime-local' ? -8 : -14);
const dateParse = (timestamp, onChange) => {
    const date = new DateConstructor(timestamp);
    if (date.getFullYear() < 10000) {
        onChange(date);
    }
    else if (isNaN(timestamp)) {
        onChange(undefined);
    }
};
function Date(_a) {
    var _b, _c, _d, _e;
    var { disabled, error, errorMessage, helperText, InputLabelProps, inputRef, label, labelProps, max, min, name, onChange, placeholder, readOnly, showInlineError, value, type = 'datetime-local' } = _a, props = __rest(_a, ["disabled", "error", "errorMessage", "helperText", "InputLabelProps", "inputRef", "label", "labelProps", "max", "min", "name", "onChange", "placeholder", "readOnly", "showInlineError", "value", "type"]);
    const theme = useTheme();
    const themeProps = (_b = theme.props) === null || _b === void 0 ? void 0 : _b.MuiTextField;
    return (React.createElement(TextField, Object.assign({ disabled: disabled, error: !!error, fullWidth: (_c = themeProps === null || themeProps === void 0 ? void 0 : themeProps.fullWidth) !== null && _c !== void 0 ? _c : true, helperText: (!!error && showInlineError && errorMessage) || helperText, label: label, InputLabelProps: Object.assign(Object.assign({ shrink: true }, labelProps), InputLabelProps), inputProps: Object.assign({ max: dateFormat(max), min: dateFormat(min), readOnly }, props.inputProps), margin: (_d = themeProps === null || themeProps === void 0 ? void 0 : themeProps.margin) !== null && _d !== void 0 ? _d : 'dense', name: name, onChange: event => 
        // FIXME: `valueAsNumber` is not available in `EventTarget`.
        disabled || dateParse(event.target.valueAsNumber, onChange), placeholder: placeholder, ref: inputRef, type: type, value: (_e = dateFormat(value, type)) !== null && _e !== void 0 ? _e : '' }, filterDOMProps(props))));
}
export default connectField(Date, { kind: 'leaf' });
