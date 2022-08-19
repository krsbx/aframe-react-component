import React from 'react';
import { Entity as AEntity } from 'aframe';
import { Entity as EntityProps } from '../utils/interface';
import Primitive from './primitive/Primitive';
import { PRIMITIVE_TYPES } from '../utils/constant';

const Entity = React.forwardRef<AEntity, EntityProps>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.ENTITY} {...props} ref={ref} />
));

Entity.displayName = 'Entity';

export default Entity;
