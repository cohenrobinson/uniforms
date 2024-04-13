import type { PropTypes } from '@material-ui/core';
import { CheckboxProps } from '@material-ui/core/Checkbox';
import { SwitchProps } from '@material-ui/core/Switch';
import { FieldProps } from 'uniforms';
export declare type BoolFieldProps = FieldProps<boolean, CheckboxProps | SwitchProps, {
    appearance?: 'checkbox' | 'switch';
    fullWidth?: boolean;
    helperText?: string;
    legend?: string;
    margin?: PropTypes.Margin;
}>;
declare const _default: import("uniforms").ConnectedField<BoolFieldProps, boolean | undefined>;
export default _default;
//# sourceMappingURL=BoolField.d.ts.map