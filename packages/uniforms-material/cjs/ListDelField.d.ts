import { IconButtonProps } from '@material-ui/core/IconButton';
import React, { ReactNode } from 'react';
import { FieldProps } from 'uniforms';
export declare type ListDelFieldProps = FieldProps<unknown, IconButtonProps, {
    icon?: ReactNode;
}>;
declare const _default: import("uniforms").ConnectedField<import("uniforms").GuaranteedProps<unknown> & {
    icon?: React.ReactNode;
} & Omit<IconButtonProps<"button", {}>, keyof import("uniforms").GuaranteedProps<unknown> | "icon">, unknown>;
export default _default;
//# sourceMappingURL=ListDelField.d.ts.map