import { ReactNode } from 'react';
import { HTMLFieldProps } from 'uniforms';
export declare type ListFieldProps = HTMLFieldProps<unknown[], HTMLDivElement, {
    addIcon?: ReactNode;
    children?: ReactNode;
    info?: string;
    itemProps?: object;
    labelCol?: any;
    wrapperCol?: any;
}>;
declare const _default: import("uniforms").ConnectedField<ListFieldProps, unknown[] | undefined>;
export default _default;
//# sourceMappingURL=ListField.d.ts.map