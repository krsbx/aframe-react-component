import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Octahedron as OctahedronProps } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Octahedron = React.forwardRef<AEntity, OctahedronProps>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.OCTA_HEDRON} {...props} ref={ref} />
));

Octahedron.displayName = 'Octahedron';

export default Octahedron;
