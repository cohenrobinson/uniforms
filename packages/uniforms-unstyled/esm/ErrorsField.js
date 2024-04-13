import React from 'react';
import { filterDOMProps, useForm } from 'uniforms';
export default function ErrorsField(props) {
    const { error, schema } = useForm();
    return !error && !props.children ? null : (React.createElement("div", Object.assign({}, filterDOMProps(props)),
        props.children,
        React.createElement("ul", null, schema.getErrorMessages(error).map((message, index) => (React.createElement("li", { key: index }, message))))));
}
