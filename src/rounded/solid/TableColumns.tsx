import React from 'react';
import type { IconProps } from '../../types';

export const TableColumns: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M11,22H5c-2.757,0-5-2.243-5-5V9H11v13ZM24,7c0-2.757-2.243-5-5-5H5C2.243,2,0,4.243,0,7H24Zm-11,2v13h6c2.757,0,5-2.243,5-5V9H13Z"/></svg>
);

TableColumns.displayName = 'TableColumns';
