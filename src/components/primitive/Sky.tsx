import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Sky as SkyProps } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Sky = React.forwardRef<AEntity, SkyProps>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.SKY} {...props} ref={ref} />
));

Sky.displayName = 'Sky';

export default Sky;
