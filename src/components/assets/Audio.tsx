import React from 'react';
import { ANode } from 'aframe';
import { AudioAsset } from '../../utils/interface';

const Audio = React.forwardRef<ANode, AudioAsset>(({ ...props }, ref) =>
  React.createElement('audio', { ...props, ref })
);

Audio.displayName = 'AudioAsset';

export default Audio;
