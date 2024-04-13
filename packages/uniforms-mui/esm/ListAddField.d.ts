import { ButtonProps } from '@mui/material/Button';
import { FormControlProps } from '@mui/material/FormControl';
import React, { ReactNode } from 'react';
import { FieldProps } from 'uniforms';
export declare type ListAddFieldProps = FieldProps<unknown, ButtonProps, {
    fullWidth?: FormControlProps['fullWidth'];
    icon?: ReactNode;
    margin?: FormControlProps['margin'];
    variant?: FormControlProps['variant'];
}>;
declare const _default: import("uniforms").ConnectedField<import("uniforms").GuaranteedProps<unknown> & {
    fullWidth?: boolean | undefined;
    icon?: React.ReactNode;
    margin?: "dense" | "normal" | "none" | undefined;
    variant?: "standard" | "outlined" | "filled" | undefined;
} & Omit<ButtonProps<"button", {}>, keyof import("uniforms").GuaranteedProps<unknown> | "icon" | "fullWidth" | "margin" | "variant">, unknown>;
export default _default;
//# sourceMappingURL=ListAddField.d.ts.map