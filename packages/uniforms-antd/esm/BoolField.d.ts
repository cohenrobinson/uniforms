import Checkbox, { CheckboxProps } from 'antd/lib/checkbox';
import Switch, { SwitchProps } from 'antd/lib/switch';
import React, { ReactNode, Ref } from 'react';
import { FieldProps } from 'uniforms';
export declare type BoolFieldProps = FieldProps<boolean, Omit<CheckboxProps | SwitchProps, 'onClick'>, {
    checkbox?: boolean;
    checkedChildren?: ReactNode;
    inputRef?: Ref<typeof Checkbox | typeof Switch | any>;
    unCheckedChildren?: ReactNode;
}>;
declare const _default: import("uniforms").ConnectedField<import("uniforms").GuaranteedProps<boolean> & {
    checkbox?: boolean | undefined;
    checkedChildren?: React.ReactNode;
    inputRef?: React.Ref<any> | undefined;
    unCheckedChildren?: React.ReactNode;
} & Omit<Omit<CheckboxProps | SwitchProps, "onClick">, "checkedChildren" | "unCheckedChildren" | keyof import("uniforms").GuaranteedProps<boolean> | "checkbox" | "inputRef">, boolean | undefined>;
export default _default;
//# sourceMappingURL=BoolField.d.ts.map