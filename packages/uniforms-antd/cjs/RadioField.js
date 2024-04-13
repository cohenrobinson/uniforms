"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const radio_1 = (0, tslib_1.__importDefault)(require("antd/lib/radio"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const wrapField_1 = (0, tslib_1.__importDefault)(require("./wrapField"));
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
const radioStyle = { display: 'block' };
function Radio(props) {
    var _a, _b, _c;
    return (0, wrapField_1.default)(props, react_1.default.createElement(radio_1.default.Group, Object.assign({}, (0, uniforms_1.filterDOMProps)(props), { disabled: props.disabled, name: props.name, onChange: event => {
            if (!props.readOnly) {
                props.onChange(event.target.value);
            }
        }, value: (_a = props.value) !== null && _a !== void 0 ? _a : '', options: (_b = props.options) === null || _b === void 0 ? void 0 : _b.map(option => {
            var _a;
            return (Object.assign(Object.assign({}, option), { label: (_a = option.label) !== null && _a !== void 0 ? _a : option.value }));
        }) }), (_c = props.options) === null || _c === void 0 ? void 0 : _c.map(option => {
        var _a, _b;
        return (react_1.default.createElement(radio_1.default, { id: `${props.id}-${escape(option.value)}`, key: (_a = option.key) !== null && _a !== void 0 ? _a : option.value, style: radioStyle, value: option.value, disabled: option.disabled }, (_b = option.label) !== null && _b !== void 0 ? _b : option.value));
    })));
}
exports.default = (0, uniforms_1.connectField)(Radio, { kind: 'leaf' });
