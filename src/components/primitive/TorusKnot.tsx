import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { TorusKnot as _TorusKnot } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const TorusKnot = React.forwardRef<AEntity, _TorusKnot>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.TORUS_KNOT} {...props} ref={ref} />
));

export default TorusKnot;
