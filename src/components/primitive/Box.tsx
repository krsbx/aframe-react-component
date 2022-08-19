import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Box as BoxProps } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Box = React.forwardRef<AEntity, BoxProps>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.BOX} {...props} ref={ref} />
));

Box.displayName = 'Box';

export default Box;
