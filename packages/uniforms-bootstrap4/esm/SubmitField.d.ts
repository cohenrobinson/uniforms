import { HTMLProps, Ref } from 'react';
import { Override } from 'uniforms';
export declare type SubmitFieldProps = Override<HTMLProps<HTMLInputElement>, {
    inputClassName?: string;
    inputRef?: Ref<HTMLInputElement>;
    wrapClassName?: string;
}>;
declare function SubmitField({ className, disabled, inputClassName, inputRef, readOnly, value, wrapClassName, ...props }: SubmitFieldProps): JSX.Element;
declare namespace SubmitField {
    var defaultProps: {
        inputClassName: string;
    };
}
export default SubmitField;
//# sourceMappingURL=SubmitField.d.ts.map