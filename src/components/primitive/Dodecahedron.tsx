import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Dodecahedron as DodecahedronProps } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Dodecahedron = React.forwardRef<AEntity, DodecahedronProps>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.DODECA_HEDRON} {...props} ref={ref} />
));

Dodecahedron.displayName = 'Dodecahedron';

export default Dodecahedron;
