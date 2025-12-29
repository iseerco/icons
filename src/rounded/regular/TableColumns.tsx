import React from 'react';
import type { IconProps } from '../../types';

export const TableColumns: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,2H5C2.243,2,0,4.243,0,7v10c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5ZM5,4h14c1.654,0,3,1.346,3,3H2c0-1.654,1.346-3,3-3Zm-3,13V9H11v11H5c-1.654,0-3-1.346-3-3Zm17,3h-6V9h9v8c0,1.654-1.346,3-3,3Z"/></svg>
);

TableColumns.displayName = 'TableColumns';
