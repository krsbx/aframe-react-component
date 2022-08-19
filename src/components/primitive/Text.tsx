import React from 'react';
import { Entity as AEntity } from 'aframe';
import { Text as TextProps } from '../../utils/interface';
import { PRIMITIVE_TYPES } from '../../utils/constant';
import { convertObjectToString } from '../../utils/common';

const Text = React.forwardRef<AEntity, TextProps>(({ children, ...props }, ref) =>
  React.createElement(
    PRIMITIVE_TYPES.TEXT,
    {
      ...convertObjectToString(props),
      ref,
    },
    children
  )
);

Text.displayName = 'Text';

export default Text;
