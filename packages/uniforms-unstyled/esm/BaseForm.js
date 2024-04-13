import { BaseForm } from 'uniforms';
function Unstyled(parent) {
    class _ extends parent {
    }
    _.Unstyled = Unstyled;
    _.displayName = `Unstyled${parent.displayName}`;
    return _;
}
export default Unstyled(BaseForm);
