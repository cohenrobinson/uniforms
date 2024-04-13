import React, { HTMLProps } from 'react';
import { Override } from 'uniforms';
export declare type ErrorFieldProps = Override<Omit<HTMLProps<HTMLDivElement>, 'onChange'>, {
    error?: boolean;
    errorMessage?: string;
}>;
declare const _default: import("uniforms").ConnectedField<{
    error?: boolean | undefined;
    errorMessage?: string | undefined;
} & Omit<Omit<React.HTMLProps<HTMLDivElement>, "onChange">, "error" | "errorMessage">, string | number | readonly string[] | undefined>;
export default _default;
//# sourceMappingURL=ErrorField.d.ts.map