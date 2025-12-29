import React from 'react';
import type { IconProps } from '../../types';

export const FiBsAngleUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M0,16.019,9.52,6.513a3.507,3.507,0,0,1,4.948,0L24,16.031l-2.121,2.117L12.348,8.63a.5.5,0,0,0-.707,0l-9.52,9.507Z"/></svg>
);

FiBsAngleUp.displayName = 'FiBsAngleUp';
