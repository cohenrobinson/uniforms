import CheckboxGroup, { CheckboxGroupProps, CheckboxValueType } from 'antd/lib/checkbox/Group';
import { RadioGroupProps } from 'antd/lib/radio';
import RadioGroup from 'antd/lib/radio/group';
import SelectAntD, { SelectProps as SelectAntDProps } from 'antd/lib/select';
import { Ref } from 'react';
import { FieldProps } from 'uniforms';
import type { Option } from './types';
declare type CheckboxesProps = FieldProps<SelectFieldValue, CheckboxGroupProps | RadioGroupProps, {
    options?: Option<CheckboxValueType>[];
    checkboxes: true;
    inputRef?: Ref<typeof CheckboxGroup | typeof RadioGroup>;
    required?: boolean;
}>;
declare type SelectProps = FieldProps<SelectFieldValue, SelectAntDProps<string | string[]>, {
    options?: Option<string>[];
    checkboxes?: false;
    inputRef?: Ref<typeof SelectAntD>;
    required?: boolean;
}>;
declare type SelectFieldValue = CheckboxValueType | (string | undefined)[];
export declare type SelectFieldProps = CheckboxesProps | SelectProps;
declare const _default: import("uniforms").ConnectedField<SelectFieldProps, SelectFieldValue | undefined>;
export default _default;
//# sourceMappingURL=SelectField.d.ts.map