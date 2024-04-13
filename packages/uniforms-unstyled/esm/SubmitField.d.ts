import { HTMLProps, Ref } from 'react';
import { Override } from 'uniforms';
export declare type SubmitFieldProps = Override<HTMLProps<HTMLInputElement>, {
    inputRef?: Ref<HTMLInputElement>;
    value?: string;
}>;
export default function SubmitField({ disabled, inputRef, readOnly, value, ...props }: SubmitFieldProps): JSX.Element;
//# sourceMappingURL=SubmitField.d.ts.map