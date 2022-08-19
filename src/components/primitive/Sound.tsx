import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Sound as SoundProps } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Sound = React.forwardRef<AEntity, SoundProps>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.SOUND} {...props} ref={ref} />
));

Sound.displayName = 'Sound';

export default Sound;
