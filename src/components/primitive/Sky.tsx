import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { Sky as _Sky } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const Sky = React.forwardRef<AEntity, _Sky>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.SKY} {...props} ref={ref} />
));

export default Sky;
