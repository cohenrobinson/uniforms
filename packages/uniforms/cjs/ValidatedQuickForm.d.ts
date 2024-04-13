import { BaseForm } from './BaseForm';
import { Quick, QuickFormProps, QuickFormState } from './QuickForm';
import { Validated, ValidatedFormProps, ValidatedFormState } from './ValidatedForm';
import { UnknownObject } from './types';
export declare type ValidatedQuickFormProps<Model extends UnknownObject> = QuickFormProps<Model> & ValidatedFormProps<Model>;
export declare type ValidatedQuickFormState<Model extends UnknownObject> = QuickFormState<Model> & ValidatedFormState<Model>;
export declare const ValidatedQuickForm: {
    new <Model extends UnknownObject, Props extends ValidatedFormProps<Model> = ValidatedFormProps<Model>, State extends ValidatedFormState<Model> = ValidatedFormState<Model>>(props: Props): {
        validate: (key?: string | undefined, value?: unknown) => Promise<unknown>;
        validateModel: (originalModel: any) => Promise<unknown>;
        getContextError(): unknown;
        getContext(): import("./types").Context<Model>;
        getNativeFormProps(): {
            [key: string]: unknown;
            onSubmit: (event?: import("react").SyntheticEvent<Element, Event> | undefined) => Promise<unknown>;
            key: string;
        };
        componentDidUpdate(prevProps: Props, prevState: State, snapshot: never): void;
        onChange(key: string, value: unknown): void;
        __reset(state: State): Partial<State>;
        onSubmit(event?: import("react").SyntheticEvent<Element, Event> | undefined): Promise<unknown>;
        onValidate(key?: string | undefined, value?: unknown): Promise<unknown>;
        onValidateModel(originalModel: Props["model"]): Promise<unknown>;
        componentDidMount(): void;
        componentWillUnmount(): void;
        delayId?: NodeJS.Timeout | undefined;
        mounted: boolean;
        reset: () => void;
        change: (key: string, value: unknown) => void;
        submit: (event?: import("react").SyntheticEvent<Element, Event> | undefined) => Promise<unknown>;
        randomId: () => string;
        getContextName(): string[];
        getContextModel(): Model;
        getContextState(): {
            disabled: boolean;
            readOnly: boolean;
            showInlineError: boolean;
        };
        getContextSchema(): import("./Bridge").Bridge;
        getContextOnChange(): (key: string, value: unknown) => void;
        getContextOnSubmit(): (event?: import("react").SyntheticEvent<Element, Event> | undefined) => unknown;
        getModel(mode?: import("./types").ModelTransformMode | undefined, model?: Model): Model;
        onReset(): void;
        render(): JSX.Element;
        context: any;
        setState<K extends keyof State>(state: State | ((prevState: Readonly<State>, props: Readonly<Props>) => State | Pick<State, K> | null) | Pick<State, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Props> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<State>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props>, prevState: Readonly<State>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void;
    };
    Validated: typeof Validated;
    displayName: string;
    defaultProps: {
        onValidate(model: unknown, error: unknown): unknown;
        validate: string;
        autosave: boolean;
        autosaveDelay: number;
        error: null;
        model: any;
        noValidate: boolean;
        onSubmit(): void;
    };
    contextType?: import("react").Context<any> | undefined;
} & {
    new <Model_1 extends UnknownObject, Props_1 extends QuickFormProps<Model_1> = QuickFormProps<Model_1>, State_1 extends QuickFormState<Model_1> = QuickFormState<Model_1>>(props: Props_1): {
        getNativeFormProps(): {
            [key: string]: unknown;
            onSubmit: (event?: import("react").SyntheticEvent<Element, Event> | undefined) => Promise<unknown>;
            key: string;
        };
        getAutoField(): import("react").ComponentType<{
            name: string;
        }>;
        getErrorsField(): import("react").ComponentType<{}>;
        getSubmitField(): import("react").ComponentType<{}>;
        componentDidMount(): void;
        componentDidUpdate(prevProps: Props_1, prevState: State_1, snapshot: never): void;
        componentWillUnmount(): void;
        delayId?: NodeJS.Timeout | undefined;
        mounted: boolean;
        reset: () => void;
        change: (key: string, value: unknown) => void;
        submit: (event?: import("react").SyntheticEvent<Element, Event> | undefined) => Promise<unknown>;
        randomId: () => string;
        getContext(): import("./types").Context<Model_1>;
        getContextName(): string[];
        getContextError(): unknown;
        getContextModel(): Model_1;
        getContextState(): {
            disabled: boolean;
            readOnly: boolean;
            showInlineError: boolean;
        };
        getContextSchema(): import("./Bridge").Bridge;
        getContextOnChange(): (key: string, value: unknown) => void;
        getContextOnSubmit(): (event?: import("react").SyntheticEvent<Element, Event> | undefined) => unknown;
        getModel(mode?: import("./types").ModelTransformMode | undefined, model?: Model_1): Model_1;
        onChange(key: string, value: unknown): void;
        __reset(state: State_1): Partial<State_1>;
        onReset(): void;
        onSubmit(event?: import("react").SyntheticEvent<Element, Event> | undefined): Promise<unknown>;
        render(): JSX.Element;
        context: any;
        setState<K_1 extends keyof State_1>(state: State_1 | ((prevState: Readonly<State_1>, props: Readonly<Props_1>) => State_1 | Pick<State_1, K_1> | null) | Pick<State_1, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Props_1> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<State_1>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<Props_1>, nextState: Readonly<State_1>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props_1>, prevState: Readonly<State_1>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props_1>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props_1>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props_1>, nextState: Readonly<State_1>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props_1>, nextState: Readonly<State_1>, nextContext: any): void;
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
    contextType?: import("react").Context<any> | undefined;
} & typeof BaseForm;
export declare type ValidatedQuickForm = typeof ValidatedQuickForm;
//# sourceMappingURL=ValidatedQuickForm.d.ts.map