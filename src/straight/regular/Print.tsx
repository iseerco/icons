import React from 'react';
import type { IconProps } from '../../types';

export const Print: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><path d="M24,9a3,3,0,0,0-3-3H19V0H5V6H3A3,3,0,0,0,0,9V21H5v3H19V21h5ZM7,2H17V6H7ZM17,22H7V16H17Zm5-3H19V14H5v5H2V9A1,1,0,0,1,3,8H21a1,1,0,0,1,1,1Z"/><rect x="15" y="10" width={size} height={size}/></g></svg>
);

Print.displayName = 'Print';
