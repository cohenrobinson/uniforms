import { __rest } from "tslib";
import classnames from 'classnames';
import { BaseForm } from 'uniforms';
function Bootstrap3(parent) {
    class _ extends parent {
        getContextState() {
            return Object.assign(Object.assign({}, super.getContextState()), { grid: this.props.grid });
        }
        getNativeFormProps() {
            const error = this.getContextError();
            const _a = super.getNativeFormProps(), { className, grid } = _a, props = __rest(_a, ["className", "grid"]);
            return Object.assign(Object.assign({}, props), { className: classnames('form', { error, 'form-horizontal': grid }, className) });
        }
    }
    _.Bootstrap3 = Bootstrap3;
    _.displayName = `Bootstrap3${parent.displayName}`;
    return _;
}
export default Bootstrap3(BaseForm);
