"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const wrapField_1 = (0, tslib_1.__importDefault)(require("./wrapField"));
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Radio(props) {
    var _a;
    return (0, wrapField_1.default)(props, (_a = props.options) === null || _a === void 0 ? void 0 : _a.map(item => {
        var _a, _b, _c, _d;
        return (react_1.default.createElement("div", { key: (_a = item.key) !== null && _a !== void 0 ? _a : item.value, className: (0, classnames_1.default)(props.inputClassName, `radio${props.inline ? '-inline' : ''}`) },
            react_1.default.createElement("label", { htmlFor: `${props.id}-${(_b = item.key) !== null && _b !== void 0 ? _b : escape(item.value)}` },
                react_1.default.createElement("input", { checked: item.value === props.value, disabled: props.disabled, id: `${props.id}-${(_c = item.key) !== null && _c !== void 0 ? _c : escape(item.value)}`, name: props.name, onChange: () => {
                        if (!props.readOnly) {
                            props.onChange(item.value);
                        }
                    }, type: "radio" }), (_d = item.label) !== null && _d !== void 0 ? _d : item.value)));
    }));
}
exports.default = (0, uniforms_1.connectField)(Radio, { kind: 'leaf' });
