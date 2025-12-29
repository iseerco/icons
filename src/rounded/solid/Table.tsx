import React from 'react';
import type { IconProps } from '../../types';

export const Table: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m0,7C0,4.243,2.243,2,5,2h14c2.757,0,5,2.243,5,5H0Zm11,2H0v5h11v-5Zm13,0h-11v5h11v-5Zm-13,7H0v1c0,2.757,2.243,5,5,5h6v-6Zm2,0v6h6c2.757,0,5-2.243,5-5v-1h-11Z"/></svg>
);

Table.displayName = 'Table';
