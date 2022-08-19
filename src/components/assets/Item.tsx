import React from 'react';
import { ANode } from 'aframe';
import { Item as _Item } from '../../utils/interface';

const Item = React.forwardRef<ANode, _Item>(({ ...props }, ref) =>
  React.createElement('a-asset-item', { ...props, ref })
);

Item.displayName = 'ItemAsset';

export default Item;
