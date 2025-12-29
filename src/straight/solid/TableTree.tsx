import React from 'react';
import type { IconProps } from '../../types';

export const TableTree: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M7,9v3h3v2h-3v3h5v2H5V9H0v13H24V9H7Zm5,3h4v2h-4v-2Zm6,7h-4v-2h4v2ZM0,7v-2c0-1.654,1.346-3,3-3H21c1.654,0,3,1.346,3,3v2H0Z"/></svg>
);

TableTree.displayName = 'TableTree';
