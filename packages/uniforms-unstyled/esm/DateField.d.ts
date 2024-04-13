import { Ref } from 'react';
import { HTMLFieldProps } from 'uniforms';
declare type DateFieldType = 'date' | 'datetime-local';
export declare type DateFieldProps = HTMLFieldProps<Date, HTMLDivElement, {
    inputRef?: Ref<HTMLInputElement>;
    max?: Date;
    min?: Date;
    type?: DateFieldType;
}>;
declare const _default: import("uniforms").ConnectedField<DateFieldProps, Date | undefined>;
export default _default;
//# sourceMappingURL=DateField.d.ts.map