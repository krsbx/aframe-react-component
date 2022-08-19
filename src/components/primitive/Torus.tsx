import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Torus as TorusProps } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Torus = React.forwardRef<AEntity, TorusProps>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.TORUS} {...props} ref={ref} />
));

Torus.displayName = 'Torus';

export default Torus;
