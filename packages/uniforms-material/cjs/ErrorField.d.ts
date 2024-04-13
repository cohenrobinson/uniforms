import type { PropTypes } from '@material-ui/core';
import { FormHelperTextProps } from '@material-ui/core/FormHelperText';
import { Override } from 'uniforms';
export declare type ErrorFieldProps = Override<FormHelperTextProps, {
    errorMessage?: string;
    fullWidth?: boolean;
    margin?: PropTypes.Margin;
}>;
declare const _default: import("uniforms").ConnectedField<{
    errorMessage?: string | undefined;
    fullWidth?: boolean | undefined;
    margin?: PropTypes.Margin | undefined;
} & Omit<FormHelperTextProps<"p", {}>, "errorMessage" | "fullWidth" | "margin">, unknown>;
export default _default;
//# sourceMappingURL=ErrorField.d.ts.map