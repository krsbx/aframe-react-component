import React from 'react';
import { Entity as AEntity } from 'aframe';
import { Primitive as _Primitive } from '../../utils/interface';
import { getAnimations, convertObjectToString } from '../../utils/common';

const Primitive = React.forwardRef<AEntity, _Primitive>(
  ({ type, animation, children, ...props }, ref) => {
    const animations = animation ? getAnimations(animation) : {};

    return React.createElement(
      type,
      {
        ...convertObjectToString(props),
        ...animations,
        ref,
      },
      children
    );
  }
);

export default Primitive;
