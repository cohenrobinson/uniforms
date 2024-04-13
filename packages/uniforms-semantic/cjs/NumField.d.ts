import { Ref } from 'react';
import { HTMLFieldProps } from 'uniforms';
export declare type NumFieldProps = HTMLFieldProps<number, HTMLDivElement, {
    decimal?: boolean;
    icon?: string;
    iconLeft?: string;
    iconProps?: object;
    inputRef?: Ref<HTMLInputElement>;
    wrapClassName?: string;
}>;
declare const _default: import("uniforms").ConnectedField<NumFieldProps, number | undefined>;
export default _default;
//# sourceMappingURL=NumField.d.ts.map