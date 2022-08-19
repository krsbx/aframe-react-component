import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { TorusKnot as TorusKnotProps } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const TorusKnot = React.forwardRef<AEntity, TorusKnotProps>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.TORUS_KNOT} {...props} ref={ref} />
));

TorusKnot.displayName = 'TorusKnot';

export default TorusKnot;
