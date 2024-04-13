import { __rest } from "tslib";
import { Fragment, createElement } from 'react';
import { useForm } from 'uniforms';
import AutoField from './AutoField';
export default function AutoFields(_a) {
    var { element = Fragment, fields, omitFields = [] } = _a, props = __rest(_a, ["element", "fields", "omitFields"]);
    const { schema } = useForm();
    return createElement(element, props, (fields !== null && fields !== void 0 ? fields : schema.getSubfields())
        .filter(field => !omitFields.includes(field))
        .map(field => createElement(AutoField, { key: field, name: field })));
}
