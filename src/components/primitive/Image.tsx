import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Image as ImageProps } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Image = React.forwardRef<AEntity, ImageProps>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.IMAGE} {...props} ref={ref} />
));

Image.displayName = 'Image';

export default Image;
