import React from 'react';
import { AEntity } from 'aframe';
import Primitive from './Primitive';
import { Image } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Image = React.forwardRef<typeof AEntity, Image>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.IMAGE} {...props} ref={ref} />
));

export default Image;
