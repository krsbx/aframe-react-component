import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Cylinder as CylinderProps } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Cylinder = React.forwardRef<AEntity, CylinderProps>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.CYLINDER} {...props} ref={ref} />
));

Cylinder.displayName = 'Cylinder';

export default Cylinder;
