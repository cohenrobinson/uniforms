"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const FormLabel_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/FormLabel"));
const useTheme_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/styles/useTheme"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const AutoField_1 = (0, tslib_1.__importDefault)(require("./AutoField"));
const wrapField_1 = (0, tslib_1.__importDefault)(require("./wrapField"));
function Nest(_a) {
    var _b, _c, _d;
    var { children, fields, itemProps, label } = _a, props = (0, tslib_1.__rest)(_a, ["children", "fields", "itemProps", "label"]);
    const theme = (0, useTheme_1.default)();
    const formControlThemeProps = (_b = theme.props) === null || _b === void 0 ? void 0 : _b.MuiFormControl;
    return (0, wrapField_1.default)(Object.assign(Object.assign({ fullWidth: (_c = formControlThemeProps === null || formControlThemeProps === void 0 ? void 0 : formControlThemeProps.fullWidth) !== null && _c !== void 0 ? _c : true, margin: (_d = formControlThemeProps === null || formControlThemeProps === void 0 ? void 0 : formControlThemeProps.margin) !== null && _d !== void 0 ? _d : 'dense' }, props), { component: undefined }), label && react_1.default.createElement(FormLabel_1.default, { component: "legend" }, label), children ||
        fields.map(field => (react_1.default.createElement(AutoField_1.default, Object.assign({ key: field, name: field }, itemProps)))));
}
exports.default = (0, uniforms_1.connectField)(Nest);
