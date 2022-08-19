import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Triangle as TriangleProps } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Triangle = React.forwardRef<AEntity, TriangleProps>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.TRIANGLE} {...props} ref={ref} />
));

Triangle.displayName = 'Triangle';

export default Triangle;
