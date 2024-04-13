import { RadioProps } from '@mui/material/Radio';
import { FieldProps } from 'uniforms';
import type { Option } from './types';
export declare type RadioFieldProps = FieldProps<string, RadioProps, {
    options?: Option<string>[];
    checkboxes?: boolean;
    fullWidth?: boolean;
    helperText?: string;
    margin?: 'dense' | 'normal' | 'none';
    row?: boolean;
}>;
declare const _default: import("uniforms").ConnectedField<import("uniforms").GuaranteedProps<string> & {
    options?: Option<string>[] | undefined;
    checkboxes?: boolean | undefined;
    fullWidth?: boolean | undefined;
    helperText?: string | undefined;
    margin?: "dense" | "normal" | "none" | undefined;
    row?: boolean | undefined;
} & Omit<RadioProps, "row" | "fullWidth" | "helperText" | "margin" | "options" | keyof import("uniforms").GuaranteedProps<string> | "checkboxes">, string | undefined>;
export default _default;
//# sourceMappingURL=RadioField.d.ts.map