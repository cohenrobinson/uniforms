import { __rest } from "tslib";
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { filterDOMProps, useForm } from 'uniforms';
function ErrorsField(_a) {
    var _b, _c, _d;
    var { children, fullWidth, margin, variant } = _a, props = __rest(_a, ["children", "fullWidth", "margin", "variant"]);
    const theme = useTheme();
    const themeProps = (_b = theme.props) === null || _b === void 0 ? void 0 : _b.MuiFormControl;
    const { error, schema } = useForm();
    return !error && !children ? null : (React.createElement(FormControl, { error: !!error, fullWidth: (_c = fullWidth !== null && fullWidth !== void 0 ? fullWidth : themeProps === null || themeProps === void 0 ? void 0 : themeProps.fullWidth) !== null && _c !== void 0 ? _c : true, margin: (_d = margin !== null && margin !== void 0 ? margin : themeProps === null || themeProps === void 0 ? void 0 : themeProps.margin) !== null && _d !== void 0 ? _d : 'dense', variant: variant !== null && variant !== void 0 ? variant : themeProps === null || themeProps === void 0 ? void 0 : themeProps.variant },
        !!children && (React.createElement(FormHelperText, Object.assign({}, filterDOMProps(props)), children)),
        schema.getErrorMessages(error).map((message, index) => (React.createElement(FormHelperText, Object.assign({ key: index }, filterDOMProps(props)), message)))));
}
export default ErrorsField;
