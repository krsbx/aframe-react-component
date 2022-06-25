import React from 'react';
import { AEntity } from 'aframe';
import { Primitive } from '../../utils/interface';
import { getAnimations, convertObjectToString } from '../../utils/common';

const Primitive = React.forwardRef<typeof AEntity, Primitive>(
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
