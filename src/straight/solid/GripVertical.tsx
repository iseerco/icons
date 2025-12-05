import React from 'react';
import type { IconProps } from '../../types';

export const GripVertical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m18,24h-4v-6h6v4c0,1.105-.895,2-2,2Zm-8,0h-4c-1.105,0-2-.895-2-2v-4h6v6Zm10-9h-6v-6h6v6Zm-10,0h-6v-6h6v6Zm10-9h-6V0h4c1.105,0,2,.895,2,2v4Zm-10,0h-6V2c0-1.105.895-2,2-2h4v6Z"/></svg>
);

GripVertical.displayName = 'GripVertical';
