import { HTMLFieldProps } from 'uniforms';
import type { Option } from './types';
export declare type RadioFieldProps = HTMLFieldProps<string, HTMLDivElement, {
    options?: Option<string>[];
    checkboxes?: boolean;
}>;
declare const _default: import("uniforms").ConnectedField<RadioFieldProps, string | undefined>;
export default _default;
//# sourceMappingURL=RadioField.d.ts.map