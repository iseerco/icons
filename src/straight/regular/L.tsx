import React from 'react';
import type { IconProps } from '../../types';

export const L: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,24H5c-1.654,0-3-1.346-3-3V0h2V21c0,.552,.449,1,1,1H22v2Z"/></svg>
);

L.displayName = 'L';
