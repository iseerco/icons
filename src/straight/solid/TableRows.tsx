import React from 'react';
import type { IconProps } from '../../types';

export const TableRows: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M7,2h14c1.654,0,3,1.346,3,3v6H7V2Zm0,11v9H24V13H7ZM5,2H3C1.346,2,0,3.346,0,5V22H5V2Z"/></svg>
);

TableRows.displayName = 'TableRows';
