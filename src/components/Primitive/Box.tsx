import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Box } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Box = React.forwardRef<AEntity, Box>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.BOX} {...props} ref={ref} />
));

export default Box;