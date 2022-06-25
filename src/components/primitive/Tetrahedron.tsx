import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Tetrahedron as Tetrahedron } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Tetrahedron = React.forwardRef<AEntity, Tetrahedron>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.TETRA_HEDRON} {...props} ref={ref} />
));

export default Tetrahedron;
