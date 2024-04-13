/// <reference types="react" />
import type { PropTypes } from '@material-ui/core';
import { FormHelperTextProps } from '@material-ui/core/FormHelperText';
import { Override } from 'uniforms';
export declare type ErrorsFieldProps = Override<FormHelperTextProps, {
    fullWidth?: boolean;
    margin?: PropTypes.Margin;
    variant?: 'standard' | 'outlined' | 'filled';
}>;
declare function ErrorsField({ children, fullWidth, margin, variant, ...props }: ErrorsFieldProps): JSX.Element | null;
export default ErrorsField;
//# sourceMappingURL=ErrorsField.d.ts.map