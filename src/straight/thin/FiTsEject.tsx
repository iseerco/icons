import React from 'react';
import type { IconProps } from '../../types';

export const FiTsEject: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m24,21v1H0v-1h24Zm-.032-2H.032L12,2.136l11.968,16.864Zm-22-1h20.064L12,3.864,1.968,18Z"/></svg>
);

FiTsEject.displayName = 'FiTsEject';
