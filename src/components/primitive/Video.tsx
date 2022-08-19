import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Video as VideoProps } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Video = React.forwardRef<AEntity, VideoProps>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.VIDEO} {...props} ref={ref} />
));

Video.displayName = 'Video';

export default Video;
