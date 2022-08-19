import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Icosahedron as IcosahedronProps } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Icosahedron = React.forwardRef<AEntity, IcosahedronProps>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.ICOSA_HEDRON} {...props} ref={ref} />
));

Icosahedron.displayName = 'Icosahedron';

export default Icosahedron;
