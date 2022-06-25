import React from 'react';
import { Entity as AEntity } from 'aframe';
import { Entity as _Entity } from '../utils/interface';
import Primitive from './Primitive/Primitive';
import { PRIMITIVE_TYPES } from '../utils/constant';

const Entity = React.forwardRef<AEntity, _Entity>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.ENTITY} {...props} ref={ref} />
));

export default Entity;
