/// <reference types="react" />
/// <reference types="node" />
declare const _default: {
    new <Model extends import("uniforms").UnknownObject, Props extends import("uniforms").ValidatedFormProps<Model> = import("uniforms").ValidatedFormProps<Model>, State extends import("uniforms").ValidatedFormState<Model> = import("uniforms").ValidatedFormState<Model>>(props: Props): {
        validate: (key?: string | undefined, value?: unknown) => Promise<unknown>;
        validateModel: (originalModel: any) => Promise<unknown>;
        getContextError(): unknown;
        getContext(): import("uniforms").Context<Model>;
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
        getContextSchema(): import("uniforms").Bridge;
        getContextOnChange(): (key: string, value: unknown) => void;
        getContextOnSubmit(): (event?: import("react").SyntheticEvent<Element, Event> | undefined) => unknown;
        getModel(mode?: import("uniforms").ModelTransformMode | undefined, model?: Model | undefined): Model;
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
    new <Model_1 extends import("uniforms").UnknownObject, Props_1 extends import("uniforms").QuickFormProps<Model_1> = import("uniforms").QuickFormProps<Model_1>, State_1 extends import("uniforms").QuickFormState<Model_1> = import("uniforms").QuickFormState<Model_1>>(props: Props_1): {
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
        getContext(): import("uniforms").Context<Model_1>;
        getContextName(): string[];
        getContextError(): unknown;
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
        onChange(key: string, value: unknown): void;
        __reset(state: State_1): Partial<State_1>;
        onReset(): void;
        onSubmit(event?: import("react").SyntheticEvent<Element, Event> | undefined): Promise<unknown>;
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
//# sourceMappingURL=ValidatedQuickForm.d.ts.map