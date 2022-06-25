import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { CurvedImage as _CurvedImage } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const CurvedImage = React.forwardRef<AEntity, _CurvedImage>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.CURVED_IMAGE} {...props} ref={ref} />
));

export default CurvedImage;
