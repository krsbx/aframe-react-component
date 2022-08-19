import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Plane as PlaneProps } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Plane = React.forwardRef<AEntity, PlaneProps>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.PLANE} {...props} ref={ref} />
));

Plane.displayName = 'Plane';

export default Plane;
