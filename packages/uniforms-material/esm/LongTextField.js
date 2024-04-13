import { __rest } from "tslib";
import TextField from '@material-ui/core/TextField';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
const LongText = (_a) => {
    var _b, _c, _d;
    var { disabled, error, errorMessage, helperText, inputRef, label, name, onChange, placeholder, readOnly, showInlineError, type = 'text', value } = _a, props = __rest(_a, ["disabled", "error", "errorMessage", "helperText", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "showInlineError", "type", "value"]);
    const theme = useTheme();
    const themeProps = (_b = theme.props) === null || _b === void 0 ? void 0 : _b.MuiTextField;
    return (React.createElement(TextField, Object.assign({ disabled: disabled, error: !!error, fullWidth: (_c = themeProps === null || themeProps === void 0 ? void 0 : themeProps.fullWidth) !== null && _c !== void 0 ? _c : true, helperText: (!!error && showInlineError && errorMessage) || helperText, inputProps: Object.assign(Object.assign({}, themeProps === null || themeProps === void 0 ? void 0 : themeProps.inputProps), { readOnly }), label: label, margin: (_d = themeProps === null || themeProps === void 0 ? void 0 : themeProps.margin) !== null && _d !== void 0 ? _d : 'dense', multiline: true, name: name, onChange: event => disabled || onChange(event.target.value), placeholder: placeholder, ref: inputRef, type: type, value: value !== null && value !== void 0 ? value : '' }, filterDOMProps(props))));
};
export default connectField(LongText, { kind: 'leaf' });
