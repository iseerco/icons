import React from 'react';
import type { IconProps } from '../../types';

export const Spinner: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><path d="M.415,12a12,12,0,0,1,23.17-4.364l-1.863.728A10,10,0,1,0,12.415,22a9.939,9.939,0,0,0,9.307-6.364l1.863.728A12,12,0,0,1,.415,12Z"/></g></svg>
);

Spinner.displayName = 'Spinner';
