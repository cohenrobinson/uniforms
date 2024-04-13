import { ComponentType, FunctionComponent } from 'react';
import { GuaranteedProps, Override, UnknownObject } from './types';
/** @internal */
export declare type ConnectFieldOptions = {
    initialValue?: boolean;
    kind?: 'leaf' | 'node';
};
/** @internal */
export declare type ConnectedFieldProps<Props extends UnknownObject, Value = Props['value']> = Override<Props, Override<Partial<GuaranteedProps<Value>>, {
    label?: Props['label'] | null | string;
    name: string;
}>>;
/** @internal */
export declare type ConnectedField<Props extends UnknownObject, Value = Props['value']> = FunctionComponent<ConnectedFieldProps<Props, Value>> & {
    Component: ComponentType<Props>;
    options?: ConnectFieldOptions;
};
export declare function connectField<Props extends UnknownObject, Value = Props['value']>(Component: ComponentType<Props>, options?: ConnectFieldOptions): ConnectedField<Props, Value>;
//# sourceMappingURL=connectField.d.ts.map