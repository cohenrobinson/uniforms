/// <reference types="react" />
/// <reference types="node" />
declare const _default: {
    new <Model extends import("uniforms").UnknownObject, Props extends import("uniforms").AutoFormProps<Model> = import("uniforms").AutoFormProps<Model>, State extends import("uniforms").AutoFormState<Model> = import("uniforms").AutoFormState<Model>>(props: Props): {
        componentDidUpdate(prevProps: Props, prevState: State, snapshot: never): void;
        getNativeFormProps(): {
            [key: string]: unknown;
            onSubmit: (event?: import("react").SyntheticEvent<Element, Event> | undefined) => Promise<unknown>;
            key: string;
        };
        getModel(mode: import("uniforms").ModelTransformMode): State["model"];
        onChange(key: string, value: unknown): void;
        __reset(state: State): Partial<State>;
        validate: (key?: string | undefined, value?: unknown) => Promise<unknown>;
        validateModel: (originalModel: any) => Promise<unknown>;
        getContextError(): unknown;
        getContext(): import("uniforms").Context<Model>;
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
        getContextSchema(): import("uniforms").Bridge;
        getContextOnChange(): (key: string, value: unknown) => void;
        getContextOnSubmit(): (event?: import("react").SyntheticEvent<Element, Event> | undefined) => unknown;
        onReset(): void;
        render(): JSX.Element;
        context: any;
        setState<K extends keyof State>(state: State | Pick<State, K> | ((prevState: Readonly<State>, props: Readonly<Props>) => State | Pick<State, K> | null) | null, callback?: (() => void) | undefined): void;
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
    Auto: typeof import("uniforms").Auto;
    displayName: string;
    Validated: typeof import("uniforms").Validated;
    defaultProps: {
        onValidate(model: unknown, error: unknown): unknown;
        validate: string;
        autosave: boolean;
        autosaveDelay: number;
        error: null;
        model: any;
        noValidate: boolean;
        onSubmit(): void;
    } & {
        autosave: boolean;
        autosaveDelay: number;
        error: null;
        model: any;
        noValidate: boolean;
        onSubmit(): void;
    };
    contextType?: import("react").Context<any> | undefined;
    Quick: typeof import("uniforms").Quick;
} & {
    new <Model_1 extends import("uniforms").UnknownObject, Props_1 extends import("uniforms").ValidatedFormProps<Model_1> = import("uniforms").ValidatedFormProps<Model_1>, State_1 extends import("uniforms").ValidatedFormState<Model_1> = import("uniforms").ValidatedFormState<Model_1>>(props: Props_1): {
        validate: (key?: string | undefined, value?: unknown) => Promise<unknown>;
        validateModel: (originalModel: any) => Promise<unknown>;
        getContextError(): unknown;
        getContext(): import("uniforms").Context<Model_1>;
        getNativeFormProps(): {
            [key: string]: unknown;
            onSubmit: (event?: import("react").SyntheticEvent<Element, Event> | undefined) => Promise<unknown>;
            key: string;
        };
        componentDidUpdate(prevProps: Props_1, prevState: State_1, snapshot: never): void;
        onChange(key: string, value: unknown): void;
        __reset(state: State_1): Partial<State_1>;
        onSubmit(event?: import("react").SyntheticEvent<Element, Event> | undefined): Promise<unknown>;
        onValidate(key?: string | undefined, value?: unknown): Promise<unknown>;
        onValidateModel(originalModel: Props_1["model"]): Promise<unknown>;
        componentDidMount(): void;
        componentWillUnmount(): void;
        delayId?: NodeJS.Timeout | undefined;
        mounted: boolean;
        reset: () => void;
        change: (key: string, value: unknown) => void;
        submit: (event?: import("react").SyntheticEvent<Element, Event> | undefined) => Promise<unknown>;
        randomId: () => string;
        getContextName(): string[];
        getContextModel(): Model_1;
        getContextState(): {
            disabled: boolean;
            readOnly: boolean;
            showInlineError: boolean;
        };
        getContextSchema(): import("uniforms").Bridge;
        getContextOnChange(): (key: string, value: unknown) => void;
        getContextOnSubmit(): (event?: import("react").SyntheticEvent<Element, Event> | undefined) => unknown;
        getModel(mode?: import("uniforms").ModelTransformMode | undefined, model?: Model_1 | undefined): Model_1;
        onReset(): void;
        render(): JSX.Element;
        context: any;
        setState<K_1 extends keyof State_1>(state: State_1 | Pick<State_1, K_1> | ((prevState: Readonly<State_1>, props: Readonly<Props_1>) => State_1 | Pick<State_1, K_1> | null) | null, callback?: (() => void) | undefined): void;
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
    Validated: typeof import("uniforms").Validated;
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
    new <Model_2 extends import("uniforms").UnknownObject, Props_2 extends import("uniforms").QuickFormProps<Model_2> = import("uniforms").QuickFormProps<Model_2>, State_2 extends import("uniforms").QuickFormState<Model_2> = import("uniforms").QuickFormState<Model_2>>(props: Props_2): {
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
        componentDidUpdate(prevProps: Props_2, prevState: State_2, snapshot: never): void;
        componentWillUnmount(): void;
        delayId?: NodeJS.Timeout | undefined;
        mounted: boolean;
        reset: () => void;
        change: (key: string, value: unknown) => void;
        submit: (event?: import("react").SyntheticEvent<Element, Event> | undefined) => Promise<unknown>;
        randomId: () => string;
        getContext(): import("uniforms").Context<Model_2>;
        getContextName(): string[];
        getContextError(): unknown;
        getContextModel(): Model_2;
        getContextState(): {
            disabled: boolean;
            readOnly: boolean;
            showInlineError: boolean;
        };
        getContextSchema(): import("uniforms").Bridge;
        getContextOnChange(): (key: string, value: unknown) => void;
        getContextOnSubmit(): (event?: import("react").SyntheticEvent<Element, Event> | undefined) => unknown;
        getModel(mode?: import("uniforms").ModelTransformMode | undefined, model?: Model_2 | undefined): Model_2;
        onChange(key: string, value: unknown): void;
        __reset(state: State_2): Partial<State_2>;
        onReset(): void;
        onSubmit(event?: import("react").SyntheticEvent<Element, Event> | undefined): Promise<unknown>;
        render(): JSX.Element;
        context: any;
        setState<K_2 extends keyof State_2>(state: State_2 | Pick<State_2, K_2> | ((prevState: Readonly<State_2>, props: Readonly<Props_2>) => State_2 | Pick<State_2, K_2> | null) | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Props_2> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<State_2>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<Props_2>, nextState: Readonly<State_2>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props_2>, prevState: Readonly<State_2>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props_2>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props_2>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props_2>, nextState: Readonly<State_2>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props_2>, nextState: Readonly<State_2>, nextContext: any): void;
    };
    Quick: typeof import("uniforms").Quick;
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
} & typeof import("uniforms").BaseForm;
export default _default;
//# sourceMappingURL=AutoForm.d.ts.map