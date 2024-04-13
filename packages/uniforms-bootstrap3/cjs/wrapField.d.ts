import { HTMLProps, ReactNode } from 'react';
import { Override } from 'uniforms';
declare type WrapperProps = Override<Omit<HTMLProps<HTMLDivElement>, 'onChange'>, {
    changed?: boolean;
    error?: unknown;
    errorMessage?: string;
    feedbackable?: boolean;
    grid?: number | string | Record<string, number>;
    help?: string;
    helpClassName?: string;
    label?: ReactNode;
    labelClassName?: string | string[];
    showInlineError?: boolean;
    value?: boolean | string | number | string[] | undefined;
    wrapClassName?: string;
}>;
export default function wrapField({ changed, className, disabled, error, errorMessage, feedbackable, // Only some input types support feedback icons.
grid, // Grid is either an number between 1 and 11 or an object with keys like xs and md.
help, // Help text.
helpClassName, // Help text class name.
id, label, labelClassName, // Label class name (String|Array[String]).
required, showInlineError, // Show inline error message?
wrapClassName, // Input wrapper class name.
...props }: WrapperProps, children: ReactNode): JSX.Element;
declare module 'uniforms' {
    interface FilterDOMProps {
        grid: never;
    }
}
export {};
//# sourceMappingURL=wrapField.d.ts.map