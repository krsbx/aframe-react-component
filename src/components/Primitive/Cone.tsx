import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Cone } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Cone = React.forwardRef<AEntity, Cone>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.CONE} {...props} ref={ref} />
));

export default Cone;
