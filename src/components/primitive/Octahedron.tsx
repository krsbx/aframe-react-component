import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Octahedron as Octahedron } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Octahedron = React.forwardRef<AEntity, Octahedron>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.OCTA_HEDRON} {...props} ref={ref} />
));

export default Octahedron;
