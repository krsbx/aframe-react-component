import React from 'react';
import { ANode } from 'aframe';
import { VideoAsset } from '../../utils/interface';

const Video = React.forwardRef<ANode, VideoAsset>(({ ...props }, ref) =>
  React.createElement('video', { ...props, ref })
);

export default Video;
