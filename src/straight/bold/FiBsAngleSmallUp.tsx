import React from 'react';
import type { IconProps } from '../../types';

export const FiBsAngleSmallUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16.939,15.561,12,10.621l-4.939,4.94L4.939,13.439l5.293-5.293a2.5,2.5,0,0,1,3.536,0l5.293,5.293Z"/></svg>
);

FiBsAngleSmallUp.displayName = 'FiBsAngleSmallUp';
