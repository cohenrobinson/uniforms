import { Ref } from 'react';
import { HTMLFieldProps } from 'uniforms';
import type { Option } from './types';
export declare type SelectFieldProps = HTMLFieldProps<string | string[], HTMLDivElement, {
    options?: Option<string>[];
    checkboxes?: boolean;
    inputRef?: Ref<HTMLSelectElement>;
}>;
declare const _default: import("uniforms").ConnectedField<SelectFieldProps, string | string[] | undefined>;
export default _default;
//# sourceMappingURL=SelectField.d.ts.map