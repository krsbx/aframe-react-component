import _ from 'lodash';
import React, { useEffect, useRef } from 'react';
import { Scene as AScene } from 'aframe';
import { convertObjectToString, mergeRefs } from '../utils/common';
import { Scene as SceneProps } from '../utils/interface';

const Scene = React.forwardRef<AScene, SceneProps>(({ children, ...props }, ref) => {
  const { vrModeUI, orientationUI, colorSpace, ...rest } = props;
  const sceneRef = useRef<AScene>(null);

  useEffect(() => {
    const defaultCamera = sceneRef.current?.querySelectorAll('[camera]');

    // Remove default camera that Aframe add automatically, if user add a camera
    if (!_.isNil(defaultCamera) && defaultCamera.length > 1) {
      _.last(defaultCamera)?.remove();
    }
  }, []);

  return React.createElement(
    'a-scene',
    {
      ...convertObjectToString(rest),
      ...(colorSpace && { 'color-space': colorSpace }),
      'vr-mode-ui': `enabled: ${vrModeUI ?? false}`,
      'device-orientation-permission-ui': `enabled: ${orientationUI ?? false}`,
      ref: mergeRefs(sceneRef, ref),
    },
    children
  );
});

Scene.displayName = 'Scene';

export default Scene;
