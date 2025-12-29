import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSpinner: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M.415,12.051a12,12,0,0,1,23.17-4.364L20.791,8.779a9,9,0,1,0,0,6.545l2.794,1.092A12,12,0,0,1,.415,12.051Z"/></svg>
);

FiBsSpinner.displayName = 'FiBsSpinner';
