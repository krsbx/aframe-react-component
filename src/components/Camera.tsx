import React from 'react';
import { AEntity } from 'aframe';
import { convertObjectToString } from '../utils/common';
import { Camera as CameraProps } from '../utils/interface';

const Camera = React.forwardRef<typeof AEntity, CameraProps>(
  ({ 'look-controls': lookControls, active, ...props }, ref) =>
    React.createElement('a-camera', {
      ...convertObjectToString(props),
      'look-controls': `enabled: ${lookControls ?? true}`,
      active: active ?? true,
      ref,
    })
);

Camera.displayName = 'Camera';

export default Camera;
