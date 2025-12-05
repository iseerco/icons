import React from 'react';
import type { IconProps } from '../../types';

export const Information: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m11,1.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm3,20.5v-14c0-1.654-1.346-3-3-3h-4v2h4c.551,0,1,.449,1,1v14h-5v2h12v-2h-5Z"/></svg>
);

Information.displayName = 'Information';
