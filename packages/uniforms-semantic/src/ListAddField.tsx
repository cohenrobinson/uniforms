import React from 'react';
import classnames from 'classnames';
import cloneDeep from 'lodash/cloneDeep';
import { connectField, filterDOMProps } from 'uniforms';

const ListAdd = ({
  className,
  disabled,
  parent,
  value,
  ...props
}: {
  className?: string;
  disabled?: boolean;
  parent?: any;
  value?: any;
  name: string;
}) => {
  const limitNotReached =
    !disabled && !(parent.maxCount <= parent.value.length);

  return (
    <i
      {...filterDOMProps(props)}
      className={classnames(
        'ui',
        className,
        limitNotReached ? 'link' : 'disabled',
        'fitted add icon',
      )}
      onClick={() =>
        limitNotReached &&
        parent.onChange(parent.value.concat([cloneDeep(value)]))
      }
    />
  );
};

export default connectField(ListAdd, { initialValue: false });