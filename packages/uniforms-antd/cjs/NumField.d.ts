import { InputNumberProps } from 'antd/lib/input-number';
import React, { Ref } from 'react';
import { FieldProps } from 'uniforms';
export declare type NumFieldProps = FieldProps<number, Omit<InputNumberProps, 'onReset'>, {
    decimal?: boolean;
    inputRef?: Ref<unknown>;
}>;
declare const _default: import("uniforms").ConnectedField<import("uniforms").GuaranteedProps<number> & {
    decimal?: boolean | undefined;
    inputRef?: React.Ref<unknown> | undefined;
} & Omit<Omit<InputNumberProps, "onReset">, "inputRef" | "decimal" | keyof import("uniforms").GuaranteedProps<number>>, number | undefined>;
export default _default;
//# sourceMappingURL=NumField.d.ts.map