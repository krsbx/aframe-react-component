import React from 'react';
import { Entity as AEntity } from 'aframe';
import Primitive from './Primitive';
import { GLTFModel } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';

const GLTFModel = React.forwardRef<AEntity, GLTFModel>(({ ...props }, ref) => (
  <Primitive type={PRIMITIVE_TYPES.GLTF_MODEL} {...props} ref={ref} />
));

export default GLTFModel;
