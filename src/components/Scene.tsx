import React from 'react';
import { Scene as AScene } from 'aframe';
import { convertObjectToString } from '../utils/common';
import { Scene as _Scene } from '../utils/interface';

const Scene = React.forwardRef<AScene, _Scene>(({ children, ...props }, ref) => {
  const { vrModeUI, orientationUI, colorSpace, ...rest } = props;

  return React.createElement(
    'a-scene',
    {
      ...convertObjectToString(rest),
      ...(colorSpace && { 'color-space': colorSpace }),
      'vr-mode-ui': `enabled: ${vrModeUI ?? false}`,
      'device-orientation-permission-ui': `enabled: ${orientationUI ?? false}`,
      ref,
    },
    children
  );
});

export default Scene;
