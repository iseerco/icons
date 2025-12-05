import React from 'react';
import type { IconProps } from '../../types';

export const LogOut: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><path d="M15,2.426v2.1a9,9,0,1,1-6,0v-2.1a11,11,0,1,0,6,0Z"/><rect x="11" width={size} height={size}/></g></svg>
);

LogOut.displayName = 'LogOut';
