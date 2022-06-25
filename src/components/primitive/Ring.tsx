import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Ring as _Ring } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Ring = React.forwardRef<AEntity, _Ring>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.RING} {...props} ref={ref} />
));

export default Ring;
