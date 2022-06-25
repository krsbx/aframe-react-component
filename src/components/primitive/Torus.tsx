import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Torus as _Torus } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Torus = React.forwardRef<AEntity, _Torus>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.TORUS} {...props} ref={ref} />
));

export default Torus;
