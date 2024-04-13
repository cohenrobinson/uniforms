import { __rest } from "tslib";
import Button from '@material-ui/core/Button';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { filterDOMProps, useForm } from 'uniforms';
function SubmitField(_a) {
    var _b, _c;
    var { children, disabled, inputRef, label = 'Submit', value } = _a, props = __rest(_a, ["children", "disabled", "inputRef", "label", "value"]);
    const { error, state } = useForm();
    const theme = useTheme();
    const themeProps = (_b = theme.props) === null || _b === void 0 ? void 0 : _b.MuiButton;
    return (React.createElement(Button, Object.assign({ disabled: disabled === undefined ? !!(error || state.disabled) : disabled, ref: inputRef, type: "submit", value: value, variant: (_c = themeProps === null || themeProps === void 0 ? void 0 : themeProps.variant) !== null && _c !== void 0 ? _c : 'contained' }, filterDOMProps(props)), children || label));
}
export default SubmitField;
