import { TextAreaProps, TextAreaRef } from 'antd/lib/input/TextArea';
import React, { Ref } from 'react';
import { FieldProps } from 'uniforms';
export declare type LongTextFieldProps = FieldProps<string, Omit<TextAreaProps, 'onReset'>, {
    inputRef?: Ref<TextAreaRef>;
}>;
declare const _default: import("uniforms").ConnectedField<import("uniforms").GuaranteedProps<string> & {
    inputRef?: React.Ref<TextAreaRef> | undefined;
} & Omit<Omit<TextAreaProps, "onReset">, "inputRef" | keyof import("uniforms").GuaranteedProps<string>>, string | undefined>;
export default _default;
//# sourceMappingURL=LongTextField.d.ts.map