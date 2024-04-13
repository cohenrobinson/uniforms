import Input, { InputProps } from 'antd/lib/input';
import React, { Ref } from 'react';
import { FieldProps } from 'uniforms';
export declare type TextFieldProps = FieldProps<string, Omit<InputProps, 'onReset'>, {
    inputRef?: Ref<Input>;
}>;
declare const _default: import("uniforms").ConnectedField<import("uniforms").GuaranteedProps<string> & {
    inputRef?: React.Ref<Input> | undefined;
} & Omit<Omit<InputProps, "onReset">, "inputRef" | keyof import("uniforms").GuaranteedProps<string>>, string | undefined>;
export default _default;
//# sourceMappingURL=TextField.d.ts.map