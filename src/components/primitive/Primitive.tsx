import React from 'react';
import { Entity as AEntity } from 'aframe';
import { Primitive as PrimitiveProps } from '../../utils/interface';
import { getAnimations, convertObjectToString } from '../../utils/common';

const Primitive = React.forwardRef<AEntity, PrimitiveProps>(
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

Primitive.displayName = 'Primitive';

export default Primitive;
