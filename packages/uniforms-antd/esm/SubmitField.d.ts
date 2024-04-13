import { ButtonProps } from 'antd/lib/button';
import { Ref } from 'react';
import { Override } from 'uniforms';
export declare type SubmitFieldProps = Override<ButtonProps, {
    inputRef?: Ref<HTMLInputElement>;
}>;
declare function SubmitField({ disabled, inputRef, value, ...props }: SubmitFieldProps): JSX.Element;
export default SubmitField;
//# sourceMappingURL=SubmitField.d.ts.map