import React from 'react';
import type { IconProps } from '../../types';

export const TableColumns: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M0,7v-2c0-1.654,1.346-3,3-3H21c1.654,0,3,1.346,3,3v2H0Zm11,2H0v13H11V9Zm2,0v13h11V9H13Z"/></svg>
);

TableColumns.displayName = 'TableColumns';
