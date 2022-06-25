import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Dodecahedron as _Dodecahedron } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Dodecahedron = React.forwardRef<AEntity, _Dodecahedron>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.DODECA_HEDRON} {...props} ref={ref} />
));

export default Dodecahedron;
