import { RadioProps } from 'antd/lib/radio';
import { FieldProps } from 'uniforms';
import type { Option } from './types';
export declare type RadioFieldProps = FieldProps<string, RadioProps, {
    options?: Option<string>[];
}>;
declare const _default: import("uniforms").ConnectedField<import("uniforms").GuaranteedProps<string> & {
    options?: Option<string>[] | undefined;
} & Omit<RadioProps, "options" | keyof import("uniforms").GuaranteedProps<string>>, string | undefined>;
export default _default;
//# sourceMappingURL=RadioField.d.ts.map