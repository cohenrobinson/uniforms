"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Group_1 = (0, tslib_1.__importDefault)(require("antd/lib/checkbox/Group"));
const group_1 = (0, tslib_1.__importDefault)(require("antd/lib/radio/group"));
const select_1 = (0, tslib_1.__importDefault)(require("antd/lib/select"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const wrapField_1 = (0, tslib_1.__importDefault)(require("./wrapField"));
function Select(props) {
    var _a, _b;
    const Group = props.fieldType === Array ? Group_1.default : group_1.default;
    const filteredDOMProps = (0, uniforms_1.filterDOMProps)(props);
    return (0, wrapField_1.default)(props, props.checkboxes ? (react_1.default.createElement("span", Object.assign({}, filteredDOMProps),
        react_1.default.createElement(Group, Object.assign({}, filteredDOMProps, { disabled: props.disabled, name: props.name, onChange: (eventOrValue) => {
                if (!props.readOnly) {
                    props.onChange(
                    // FIXME: Argument type depends on `props.fieldType`.
                    props.fieldType === Array
                        ? eventOrValue
                        : eventOrValue.target.value);
                }
            }, options: (_a = props.options) === null || _a === void 0 ? void 0 : _a.map(option => {
                var _a;
                return (Object.assign(Object.assign({}, option), { label: (_a = option.label) !== null && _a !== void 0 ? _a : option.value }));
            }), value: props.value })))) : (react_1.default.createElement(select_1.default, Object.assign({ allowClear: !props.required, disabled: props.disabled, mode: props.fieldType === Array ? 'multiple' : undefined, name: props.name, onChange: value => {
            if (!props.readOnly) {
                props.onChange(value);
            }
        }, placeholder: props.placeholder, 
        // @ts-expect-error: Incorrect `inputRef` type.
        ref: props.inputRef, value: props.fieldType === Array
            ? Array.isArray(props.value)
                ? props.value.filter(value => value !== undefined)
                : []
            : props.value }, filteredDOMProps), (_b = props.options) === null || _b === void 0 ? void 0 : _b.map(option => {
        var _a, _b, _c;
        return (react_1.default.createElement(select_1.default.Option, { disabled: option.disabled, key: (_a = option.key) !== null && _a !== void 0 ? _a : option.value, value: option.value, id: `${props.id}-${(_b = option.key) !== null && _b !== void 0 ? _b : escape(option.value)}` }, (_c = option.label) !== null && _c !== void 0 ? _c : option.value));
    }))));
}
exports.default = (0, uniforms_1.connectField)(Select, { kind: 'leaf' });
