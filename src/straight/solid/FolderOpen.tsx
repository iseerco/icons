import React from 'react';
import type { IconProps } from '../../types';

export const FolderOpen: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m23.827,10l-3.6,13H4.086l4.133-13h15.608ZM2,23l4.8-15h14.2s0-2,0-2c0-1.654-1.346-3-3-3h-7.764L6.236,1h-3.236C1.346,1,0,2.346,0,4v19h2Z"/></svg>
);

FolderOpen.displayName = 'FolderOpen';
