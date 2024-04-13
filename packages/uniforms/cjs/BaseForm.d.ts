import { Component, SyntheticEvent } from 'react';
import { Bridge } from './Bridge';
import { ChangedMap, Context, ModelTransformMode, UnknownObject } from './types';
export declare type BaseFormProps<Model extends UnknownObject> = {
    autosave: boolean;
    autosaveDelay: number;
    disabled?: boolean;
    error: unknown;
    id?: string;
    model: Model;
    modelTransform?: (mode: ModelTransformMode, model: Model) => Model;
    noValidate: boolean;
    onChange?: (key: string, value: unknown) => void;
    onSubmit: (model: Model) => void | Promise<unknown>;
    placeholder?: boolean;
    readOnly?: boolean;
    schema: Bridge;
    showInlineError?: boolean;
};
export declare type BaseFormState<Model extends UnknownObject> = {
    changed: boolean;
    changedMap: ChangedMap<Model>;
    resetCount: number;
    submitting: boolean;
    submitted: boolean;
};
export declare class BaseForm<Model extends UnknownObject, Props extends BaseFormProps<Model> = BaseFormProps<Model>, State extends BaseFormState<Model> = BaseFormState<Model>> extends Component<Props, State> {
    static displayName: string;
    static defaultProps: {
        autosave: boolean;
        autosaveDelay: number;
        error: null;
        model: any;
        noValidate: boolean;
        onSubmit(): void;
    };
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props, prevState: State, snapshot: never): void;
    componentWillUnmount(): void;
    delayId?: ReturnType<typeof setTimeout> | undefined;
    mounted: boolean;
    reset: () => void;
    change: (key: string, value: unknown) => void;
    submit: (event?: SyntheticEvent) => Promise<unknown>;
    randomId: () => string;
    getContext(): Context<Model>;
    getContextName(): Context<Model>['name'];
    getContextError(): Context<Model>['error'];
    getContextModel(): Context<Model>['model'];
    getContextState(): Context<Model>['state'];
    getContextSchema(): Context<Model>['schema'];
    getContextOnChange(): Context<Model>['onChange'];
    getContextOnSubmit(): Context<Model>['onSubmit'];
    getModel(mode?: ModelTransformMode, model?: Model): Context<Model>['model'];
    getNativeFormProps(): {
        [key: string]: unknown;
        onSubmit: BaseForm<Model, Props, State>['onSubmit'];
        key: string;
    };
    onChange(key: string, value: unknown): void;
    __reset(state: State): Partial<State>;
    onReset(): void;
    onSubmit(event?: SyntheticEvent): Promise<unknown>;
    render(): JSX.Element;
}
//# sourceMappingURL=BaseForm.d.ts.map