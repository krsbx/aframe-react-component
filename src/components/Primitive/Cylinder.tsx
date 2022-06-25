import React from 'react';
import { AEntity } from 'aframe';
import Primitive from './Primitive';
import { Cylinder } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Cylinder = React.forwardRef<typeof AEntity, Cylinder>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.CYLINDER} {...props} ref={ref} />
));

export default Cylinder;
