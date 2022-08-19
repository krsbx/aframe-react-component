import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Sphere as SphereProps } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Sphere = React.forwardRef<AEntity, SphereProps>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.SPHERE} {...props} ref={ref} />
));

Sphere.displayName = 'Sphere';

export default Sphere;
