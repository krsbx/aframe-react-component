import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Icosahedron as Icosahedron } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Icosahedron = React.forwardRef<AEntity, Icosahedron>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.ICOSA_HEDRON} {...props} ref={ref} />
));

export default Icosahedron;
