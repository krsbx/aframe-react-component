import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Tetrahedron as TetrahedronProps } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Tetrahedron = React.forwardRef<AEntity, TetrahedronProps>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.TETRA_HEDRON} {...props} ref={ref} />
));

Tetrahedron.displayName = 'Tetrahedron';

export default Tetrahedron;
