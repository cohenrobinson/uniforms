import { FormItemProps } from 'antd/lib/form';
import { ReactNode } from 'react';
import { Override } from 'uniforms';
declare type WrapperProps = Override<FormItemProps, {
    error?: unknown;
    errorMessage?: string;
    info?: string;
    showInlineError?: boolean;
    wrapperStyle?: object;
}>;
export default function wrapField({ colon, error, errorMessage, extra, help, id, info, label, labelCol, required, showInlineError, validateStatus, wrapperCol, wrapperStyle, }: WrapperProps, children: ReactNode): JSX.Element;
declare module 'uniforms' {
    interface FilterDOMProps {
        checkboxes: never;
        colon: never;
        disableItem: never;
        labelCol: never;
        validateStatus: never;
        wrapperCol: never;
        wrapperStyle: never;
    }
}
export {};
//# sourceMappingURL=wrapField.d.ts.map