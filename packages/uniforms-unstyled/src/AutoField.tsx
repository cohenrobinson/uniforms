import invariant from 'invariant';
import { useField } from 'uniforms';
import React, { ComponentType, createElement } from 'react';

import BoolField from './BoolField';
import DateField from './DateField';
import ListField from './ListField';
import NestField from './NestField';
import NumField from './NumField';
import RadioField from './RadioField';
import SelectField from './SelectField';
import TextField from './TextField';

type AutoFieldProps = {
  component?: ComponentType<any>;
  name: string;
} & Record<string, unknown>;

export default function AutoField(originalProps: AutoFieldProps) {
  const props = useField(originalProps.name, originalProps)[0];
  const { allowedValues, checkboxes, fieldType } = props;
  let { component } = props;

  if (component === undefined) {
    if (allowedValues) {
      if (checkboxes && fieldType !== Array) {
        component = RadioField;
      } else {
        component = SelectField;
      }
    } else {
      switch (fieldType) {
        case Date:
          component = DateField;
          break;
        case Array:
          component = ListField;
          break;
        case Number:
          component = NumField;
          break;
        case Object:
          component = NestField;
          break;
        case String:
          component = TextField;
          break;
        case Boolean:
          component = BoolField;
          break;
      }

      invariant(component, 'Unsupported field type: %s', fieldType);
    }
  }

  return createElement(component!, props);
}