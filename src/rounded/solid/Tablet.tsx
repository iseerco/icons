import React from 'react';
import type { IconProps } from '../../types';

export const Tablet: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13,20a1,1,0,0,1-2,0V19H2a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5H13Z"/><path d="M17,0H7A5.006,5.006,0,0,0,2,5V17H22V5A5.006,5.006,0,0,0,17,0Z"/></svg>
);

Tablet.displayName = 'Tablet';
