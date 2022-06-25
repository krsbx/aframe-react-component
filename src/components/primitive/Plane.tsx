import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Plane as _Plane } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Plane = React.forwardRef<AEntity, _Plane>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.PLANE} {...props} ref={ref} />
));

export default Plane;
