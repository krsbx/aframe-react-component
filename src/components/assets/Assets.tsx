import React from 'react';
import { ANode } from 'aframe';
import { Assets as _Assets } from '../../utils/interface';

const Assets = React.forwardRef<ANode, _Assets>(({ children, timeout }, ref) =>
  React.createElement('a-assets', { timeout, ref }, children)
);

Assets.displayName = 'Assets';

export default Assets;
