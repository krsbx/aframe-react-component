import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Cone as ConeProps } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Cone = React.forwardRef<AEntity, ConeProps>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.CONE} {...props} ref={ref} />
));

Cone.displayName = 'Cone';

export default Cone;
