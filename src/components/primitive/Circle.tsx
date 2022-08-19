import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Circle as CircleProps } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Circle = React.forwardRef<AEntity, CircleProps>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.CIRCLE} {...props} ref={ref} />
));

Circle.displayName = 'Circle';

export default Circle;
