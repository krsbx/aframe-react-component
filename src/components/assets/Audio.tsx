import React from 'react';
import { ANode } from 'aframe';
import { Audio as _Audio } from '../../utils/interface';

const Audio = React.forwardRef<ANode, _Audio>(({ ...props }, ref) =>
  React.createElement('audio', { ...props, ref })
);

export default Audio;
