import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Video as _Video } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Video = React.forwardRef<AEntity, _Video>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.VIDEO} {...props} ref={ref} />
));

export default Video;
