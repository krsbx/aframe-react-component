import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Triangle as _Triangle } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Triangle = React.forwardRef<AEntity, _Triangle>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.TRIANGLE} {...props} ref={ref} />
));

export default Triangle;
