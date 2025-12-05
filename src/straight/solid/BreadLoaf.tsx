import React from 'react';
import type { IconProps } from '../../types';

export const BreadLoaf: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M3.5,3H12.5c1.93,0,3.5,1.57,3.5,3.5,0,1.37-.8,2.59-2,3.16v11.34H2V9.66c-1.2-.57-2-1.79-2-3.16,0-1.93,1.57-3.5,3.5-3.5Zm17,0h-3.76c.79,.95,1.26,2.17,1.26,3.5,0,1.65-.76,3.21-2,4.24v10.26h6V9.66c1.2-.57,2-1.79,2-3.16,0-1.93-1.57-3.5-3.5-3.5Z"/></svg>
);

BreadLoaf.displayName = 'BreadLoaf';
