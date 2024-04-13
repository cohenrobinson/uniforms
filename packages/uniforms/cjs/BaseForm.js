"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseForm = void 0;
const tslib_1 = require("tslib");
const clone_1 = (0, tslib_1.__importDefault)(require("lodash/clone"));
const get_1 = (0, tslib_1.__importDefault)(require("lodash/get"));
const omit_1 = (0, tslib_1.__importDefault)(require("lodash/omit"));
const setWith_1 = (0, tslib_1.__importDefault)(require("lodash/setWith"));
const react_1 = (0, tslib_1.__importStar)(require("react"));
const changedKeys_1 = require("./changedKeys");
const context_1 = require("./context");
const randomIds_1 = require("./randomIds");
class BaseForm extends react_1.Component {
    constructor(props) {
        super(props);
        // @ts-expect-error: State may be bigger, but it'll be covered by the subclasses.
        this.state = {
            changed: false,
            changedMap: Object.create(null),
            resetCount: 0,
            submitted: false,
            submitting: false,
        };
        this.mounted = false;
        this.randomId = (0, randomIds_1.randomIds)(this.props.id);
        this.onReset = this.reset = this.onReset.bind(this);
        this.onChange = this.change = this.onChange.bind(this);
        this.onSubmit = this.submit = this.onSubmit.bind(this);
        // TODO: It shouldn't be here
        const getModel = this.getModel.bind(this);
        this.getModel = (mode, model = getModel(mode)) => mode !== undefined && this.props.modelTransform
            ? this.props.modelTransform(mode, model)
            : model;
    }
    componentDidMount() {
        this.mounted = true;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    componentDidUpdate(prevProps, prevState, snapshot) { }
    componentWillUnmount() {
        this.mounted = false;
        if (this.delayId) {
            clearTimeout(this.delayId);
        }
        // There are at least 4 places where we'd need to check, whether or not we
        // actually perform `setState` after the component gets unmounted. Instead,
        // we override it to hide the React warning. Also because React no longer
        // will raise it in the newer versions.
        // https://github.com/facebook/react/pull/22114
        // https://github.com/vazco/uniforms/issues/1152
        // this.setState = () => {}; - Removed in React 18, Next 14
    }
    getContext() {
        return {
            changed: this.state.changed,
            changedMap: this.state.changedMap,
            error: this.getContextError(),
            formRef: this,
            model: this.getContextModel(),
            name: this.getContextName(),
            onChange: this.getContextOnChange(),
            onSubmit: this.getContextOnSubmit(),
            randomId: this.randomId,
            schema: this.getContextSchema(),
            state: this.getContextState(),
            submitted: this.state.submitted,
            submitting: this.state.submitting,
            validating: false,
        };
    }
    getContextName() {
        return [];
    }
    getContextError() {
        return this.props.error;
    }
    getContextModel() {
        return this.getModel('form');
    }
    getContextState() {
        return {
            disabled: !!this.props.disabled,
            readOnly: !!this.props.readOnly,
            showInlineError: !!this.props.showInlineError,
        };
    }
    getContextSchema() {
        return this.props.schema;
    }
    getContextOnChange() {
        // It's bound in constructor.
        // eslint-disable-next-line @typescript-eslint/unbound-method
        return this.onChange;
    }
    getContextOnSubmit() {
        // It's bound in constructor.
        // eslint-disable-next-line @typescript-eslint/unbound-method
        return this.onSubmit;
    }
    getModel(mode, model = this.props.model) {
        return model;
    }
    getNativeFormProps() {
        const props = (0, omit_1.default)(this.props, [
            'autosave',
            'autosaveDelay',
            'disabled',
            'error',
            'model',
            'modelTransform',
            'onChange',
            'onSubmit',
            'readOnly',
            'schema',
            'showInlineError',
        ]);
        return Object.assign(Object.assign({}, props), { 
            // It's bound in constructor.
            // eslint-disable-next-line @typescript-eslint/unbound-method
            onSubmit: this.onSubmit, key: `reset-${this.state.resetCount}` });
    }
    onChange(key, value) {
        // Do not set `changed` before componentDidMount
        if (this.mounted) {
            const keys = (0, changedKeys_1.changedKeys)(key, value, (0, get_1.default)(this.getModel(), key));
            if (keys.length !== 0) {
                this.setState(state => 
                // If all are already marked, we can skip the update completely.
                state.changed && keys.every(key => !!(0, get_1.default)(state.changedMap, key))
                    ? null
                    : {
                        changed: true,
                        changedMap: keys.reduce((changedMap, key) => (0, setWith_1.default)(changedMap, key, {}, clone_1.default), (0, clone_1.default)(state.changedMap)),
                    });
            }
        }
        if (this.props.onChange) {
            this.props.onChange(key, value);
        }
        // Do not call `onSubmit` before componentDidMount
        if (this.mounted && this.props.autosave) {
            if (this.delayId) {
                clearTimeout(this.delayId);
            }
            // Delay autosave by `autosaveDelay` milliseconds...
            this.delayId = setTimeout(() => {
                // ...and wait for all scheduled `setState`s to commit. This is required
                // for AutoForm to validate correct model, waiting in `onChange`.
                this.setState(() => null, () => {
                    this.onSubmit();
                });
            }, this.props.autosaveDelay);
        }
    }
    __reset(state) {
        return {
            changed: false,
            changedMap: Object.create(null),
            resetCount: state.resetCount + 1,
            submitted: false,
            submitting: false,
        };
    }
    onReset() {
        // @ts-expect-error
        // It's bound in constructor.
        // eslint-disable-next-line @typescript-eslint/unbound-method
        this.setState(this.__reset);
    }
    onSubmit(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState(state => (state.submitted ? null : { submitted: true }));
        const result = this.props.onSubmit(this.getModel('submit'));
        if (!(result instanceof Promise)) {
            return Promise.resolve();
        }
        this.setState({ submitting: true });
        return result.finally(() => {
            this.setState({ submitting: false });
        });
    }
    render() {
        return (react_1.default.createElement(context_1.context.Provider, { value: this.getContext() },
            react_1.default.createElement("form", Object.assign({}, this.getNativeFormProps()))));
    }
}
exports.BaseForm = BaseForm;
BaseForm.displayName = 'Form';
BaseForm.defaultProps = {
    autosave: false,
    autosaveDelay: 0,
    error: null,
    model: Object.create(null),
    noValidate: true,
    onSubmit() { },
};
