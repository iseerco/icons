import React from 'react';
import type { IconProps } from '../../types';

export const FiBsFileZipper: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m16.382,0H5c-1.654,0-3,1.346-3,3v21h20V5.665L16.382,0ZM5,21V3h3v3h3v-3h3v5h5v13H5Zm6-10h-3v-3h3v3Zm0,2l1,5v1h-5v-1l1-5h3Z"/></svg>
);

FiBsFileZipper.displayName = 'FiBsFileZipper';
