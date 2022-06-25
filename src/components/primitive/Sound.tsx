import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Sound as _Sound } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Sound = React.forwardRef<AEntity, _Sound>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.SOUND} {...props} ref={ref} />
));

export default Sound;
