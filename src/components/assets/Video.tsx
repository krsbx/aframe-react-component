import React from 'react';
import { ANode } from 'aframe';
import { Video as _Video } from '../../utils/interface';

const Video = React.forwardRef<ANode, _Video>(({ ...props }, ref) =>
  React.createElement('video', { ...props, ref })
);

export default Video;
