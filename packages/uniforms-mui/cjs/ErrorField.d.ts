import { FormHelperTextProps } from '@mui/material/FormHelperText';
import { Override } from 'uniforms';
export declare type ErrorFieldProps = Override<FormHelperTextProps, {
    errorMessage?: string;
    fullWidth?: boolean;
    margin?: 'dense' | 'normal' | 'none';
}>;
declare const _default: import("uniforms").ConnectedField<{
    errorMessage?: string | undefined;
    fullWidth?: boolean | undefined;
    margin?: "dense" | "normal" | "none" | undefined;
} & Omit<FormHelperTextProps<"p", {}>, "errorMessage" | "fullWidth" | "margin">, unknown>;
export default _default;
//# sourceMappingURL=ErrorField.d.ts.map