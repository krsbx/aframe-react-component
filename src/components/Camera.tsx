import React from 'react';
import { AEntity } from 'aframe';
import { convertObjectToString } from '../utils/common';
import { Camera as _Camera } from '../utils/interface';

const Camera = React.forwardRef<typeof AEntity, _Camera>(
  ({ 'look-controls': lookControls, active, ...props }, ref) =>
    React.createElement('a-camera', {
      ...convertObjectToString(props),
      'look-controls': `enabled: ${lookControls ?? true}`,
      active: active ?? true,
      ref,
    })
);

export default Camera;
