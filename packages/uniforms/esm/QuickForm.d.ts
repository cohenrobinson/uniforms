import React, { ComponentType } from 'react';
import { BaseForm, BaseFormProps, BaseFormState } from './BaseForm';
import { UnknownObject } from './types';
export declare type QuickFormProps<Model extends UnknownObject> = BaseFormProps<Model> & {
    errorsField?: ComponentType;
    submitField?: ComponentType;
};
export declare type QuickFormState<Model extends UnknownObject> = BaseFormState<Model>;
export declare function Quick<Base extends typeof BaseForm>(Base: Base): {
    new <Model extends UnknownObject, Props extends QuickFormProps<Model> = QuickFormProps<Model>, State extends QuickFormState<Model> = QuickFormState<Model>>(props: Props): {
        getNativeFormProps(): {
            [key: string]: unknown;
            onSubmit: (event?: React.SyntheticEvent<Element, Event> | undefined) => Promise<unknown>;
            key: string;
        };
        getAutoField(): ComponentType<{
            name: string;
        }>;
        getErrorsField(): ComponentType;
        getSubmitField(): ComponentType;
        componentDidMount(): void;
        componentDidUpdate(prevProps: Props, prevState: State, snapshot: never): void;
        componentWillUnmount(): void;
        delayId?: NodeJS.Timeout | undefined;
        mounted: boolean;
        reset: () => void;
        change: (key: string, value: unknown) => void;
        submit: (event?: React.SyntheticEvent<Element, Event> | undefined) => Promise<unknown>;
        randomId: () => string;
        getContext(): import("./types").Context<Model>;
        getContextName(): string[];
        getContextError(): unknown;
        getContextModel(): Model;
        getContextState(): {
            disabled: boolean;
            readOnly: boolean;
            showInlineError: boolean;
        };
        getContextSchema(): import("./Bridge").Bridge;
        getContextOnChange(): (key: string, value: unknown) => void;
        getContextOnSubmit(): (event?: React.SyntheticEvent<Element, Event> | undefined) => unknown;
        getModel(mode?: import("./types").ModelTransformMode | undefined, model?: Model): Model;
        onChange(key: string, value: unknown): void;
        __reset(state: State): Partial<State>;
        onReset(): void;
        onSubmit(event?: React.SyntheticEvent<Element, Event> | undefined): Promise<unknown>;
        render(): JSX.Element;
        context: any;
        setState<K extends keyof State>(state: State | ((prevState: Readonly<State>, props: Readonly<Props>) => State | Pick<State, K> | null) | Pick<State, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Props> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<State>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props>, prevState: Readonly<State>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void;
    };
    Quick: typeof Quick;
    displayName: string;
    defaultProps: {
        autosave: boolean;
        autosaveDelay: number;
        error: null;
        model: any;
        noValidate: boolean;
        onSubmit(): void;
    };
    contextType?: React.Context<any> | undefined;
} & Base;
export declare const QuickForm: {
    new <Model extends UnknownObject, Props extends QuickFormProps<Model> = QuickFormProps<Model>, State extends QuickFormState<Model> = QuickFormState<Model>>(props: Props): {
        getNativeFormProps(): {
            [key: string]: unknown;
            onSubmit: (event?: React.SyntheticEvent<Element, Event> | undefined) => Promise<unknown>;
            key: string;
        };
        getAutoField(): React.ComponentType<{
            name: string;
        }>;
        getErrorsField(): ComponentType;
        getSubmitField(): ComponentType;
        componentDidMount(): void;
        componentDidUpdate(prevProps: Props, prevState: State, snapshot: never): void;
        componentWillUnmount(): void;
        delayId?: NodeJS.Timeout | undefined;
        mounted: boolean;
        reset: () => void;
        change: (key: string, value: unknown) => void;
        submit: (event?: React.SyntheticEvent<Element, Event> | undefined) => Promise<unknown>;
        randomId: () => string;
        getContext(): import("./types").Context<Model>;
        getContextName(): string[];
        getContextError(): unknown;
        getContextModel(): Model;
        getContextState(): {
            disabled: boolean;
            readOnly: boolean;
            showInlineError: boolean;
        };
        getContextSchema(): import("./Bridge").Bridge;
        getContextOnChange(): (key: string, value: unknown) => void;
        getContextOnSubmit(): (event?: React.SyntheticEvent<Element, Event> | undefined) => unknown;
        getModel(mode?: import("./types").ModelTransformMode | undefined, model?: Model): Model;
        onChange(key: string, value: unknown): void;
        __reset(state: State): Partial<State>;
        onReset(): void;
        onSubmit(event?: React.SyntheticEvent<Element, Event> | undefined): Promise<unknown>;
        render(): JSX.Element;
        context: any;
        setState<K extends keyof State>(state: State | ((prevState: Readonly<State>, props: Readonly<Props>) => State | Pick<State, K> | null) | Pick<State, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Props> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<State>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props>, prevState: Readonly<State>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void;
    };
    Quick: typeof Quick;
    displayName: string;
    defaultProps: {
        autosave: boolean;
        autosaveDelay: number;
        error: null;
        model: any;
        noValidate: boolean;
        onSubmit(): void;
    };
    contextType?: React.Context<any> | undefined;
} & typeof BaseForm;
export declare type QuickForm = typeof QuickForm;
//# sourceMappingURL=QuickForm.d.ts.map