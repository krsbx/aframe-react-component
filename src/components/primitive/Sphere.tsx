import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Sphere as _Sphere } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Sphere = React.forwardRef<AEntity, _Sphere>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.SPHERE} {...props} ref={ref} />
));

export default Sphere;
