import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Ring as RingProps } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Ring = React.forwardRef<AEntity, RingProps>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.RING} {...props} ref={ref} />
));

Ring.displayName = 'Ring';

export default Ring;
