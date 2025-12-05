import React from 'react';
import type { IconProps } from '../../types';

export const FiBsDisk: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.121,0H3A3,3,0,0,0,0,3V24H24V5.879ZM21,21H3V3H6V7H17V3.121l4,4Z"/><circle cx="12" cy="14" r="4"/></svg>
);

FiBsDisk.displayName = 'FiBsDisk';
