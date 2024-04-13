import classnames from 'classnames';
import omit from 'lodash/omit';
import { BaseForm } from 'uniforms';
function Bootstrap4(parent) {
    class _ extends parent {
        getContextState() {
            return Object.assign(Object.assign({}, super.getContextState()), { grid: this.props.grid });
        }
        getNativeFormProps() {
            const error = this.getContextError();
            const props = super.getNativeFormProps();
            return Object.assign(Object.assign({}, omit(props, ['grid'])), { className: classnames('form', { error }, props.className) });
        }
    }
    _.Bootstrap4 = Bootstrap4;
    _.displayName = `Bootstrap4${parent.displayName}`;
    return _;
}
export default Bootstrap4(BaseForm);
