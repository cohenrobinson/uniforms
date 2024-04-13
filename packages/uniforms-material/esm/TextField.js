import { __rest } from "tslib";
import TextField from '@material-ui/core/TextField';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
function Text(_a) {
    var _b, _c, _d, _e;
    var { disabled, error, errorMessage, helperText, inputRef, label, name, onChange, placeholder, readOnly, showInlineError, type = 'text', value = '' } = _a, props = __rest(_a, ["disabled", "error", "errorMessage", "helperText", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "showInlineError", "type", "value"]);
    const theme = useTheme();
    const themeProps = (_b = theme.props) === null || _b === void 0 ? void 0 : _b.MuiTextField;
    return (React.createElement(TextField, Object.assign({ disabled: disabled, error: !!error, fullWidth: (_c = themeProps === null || themeProps === void 0 ? void 0 : themeProps.fullWidth) !== null && _c !== void 0 ? _c : true, helperText: (!!error && showInlineError && errorMessage) || helperText, inputProps: Object.assign({ readOnly }, ((_d = themeProps === null || themeProps === void 0 ? void 0 : themeProps.inputProps) !== null && _d !== void 0 ? _d : {})), label: label, margin: (_e = themeProps === null || themeProps === void 0 ? void 0 : themeProps.margin) !== null && _e !== void 0 ? _e : 'dense', name: name, onChange: event => disabled || onChange(event.target.value), placeholder: placeholder, ref: inputRef, type: type, value: value }, filterDOMProps(props))));
}
export default connectField(Text, { kind: 'leaf' });
