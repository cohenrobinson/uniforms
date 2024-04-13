import { FormControlProps } from '@material-ui/core/FormControl';
import { IconButtonProps } from '@material-ui/core/IconButton';
import React, { ReactNode } from 'react';
import { FieldProps } from 'uniforms';
export declare type ListAddFieldProps = FieldProps<unknown, IconButtonProps, {
    fullWidth?: FormControlProps['fullWidth'];
    icon?: ReactNode;
    margin?: FormControlProps['margin'];
    variant?: FormControlProps['variant'];
}>;
declare const _default: import("uniforms").ConnectedField<import("uniforms").GuaranteedProps<unknown> & {
    fullWidth?: boolean | undefined;
    icon?: React.ReactNode;
    margin?: import("@material-ui/core").PropTypes.Margin | undefined;
    variant?: "standard" | "outlined" | "filled" | undefined;
} & Omit<IconButtonProps<"button", {}>, keyof import("uniforms").GuaranteedProps<unknown> | "icon" | "fullWidth" | "margin" | "variant">, unknown>;
export default _default;
//# sourceMappingURL=ListAddField.d.ts.map