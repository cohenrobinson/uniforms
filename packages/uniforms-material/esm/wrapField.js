import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import React, { createElement } from 'react';
export default function wrapField({ component, disabled, error, errorMessage, fullWidth, helperText, margin, readOnly, required, showInlineError, variant, }, ...children) {
    const formHelperText = showInlineError && error ? errorMessage : helperText;
    const props = {
        component,
        disabled: !!disabled,
        error: !!error,
        fullWidth: !!fullWidth,
        margin,
        readOnly,
        required,
        variant,
    };
    return createElement(FormControl, props, ...children, !!formHelperText && React.createElement(FormHelperText, null, formHelperText));
}
