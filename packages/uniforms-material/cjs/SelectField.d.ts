import { CheckboxProps } from '@material-ui/core/Checkbox';
import { SelectProps as MaterialSelectProps } from '@material-ui/core/Select';
import { SwitchProps } from '@material-ui/core/Switch';
import { TextFieldProps } from '@material-ui/core/TextField';
import { Ref } from 'react';
import { FieldProps, Override } from 'uniforms';
import type { Option } from './types';
declare type SelectFieldCommonProps = {
    appearance?: 'checkbox' | 'switch';
    inputRef?: Ref<HTMLButtonElement>;
    required?: boolean;
    variant?: 'standard' | 'outlined' | 'filled';
    options?: Option<string>[];
};
declare type CheckboxesProps = FieldProps<string | string[], CheckboxProps | SwitchProps, SelectFieldCommonProps & {
    checkboxes: true;
    legend?: string;
}>;
declare type SelectProps = FieldProps<string | string[], Override<MaterialSelectProps & TextFieldProps, {
    margin?: 'normal' | 'dense' | 'none';
}>, SelectFieldCommonProps & {
    checkboxes?: false;
    labelProps?: object;
    native?: boolean;
    textFieldProps?: Omit<TextFieldProps, 'value'>;
}>;
export declare type SelectFieldProps = CheckboxesProps | SelectProps;
declare const _default: import("uniforms").ConnectedField<SelectFieldProps, string | string[] | undefined>;
export default _default;
//# sourceMappingURL=SelectField.d.ts.map