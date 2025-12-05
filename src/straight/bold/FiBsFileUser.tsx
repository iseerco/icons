import React from 'react';
import type { IconProps } from '../../types';

export const FiBsFileUser: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m16.382,0H5c-1.654,0-3,1.346-3,3v21h20V5.665L16.382,0Zm.618,21v-2c0-1.105-.895-2-2-2h-6c-1.105,0-2,.895-2,2v2h-2V3h9v5h5v13h-2Zm-2-8c0,1.655-1.345,3-3,3s-3-1.345-3-3,1.345-3,3-3,3,1.345,3,3Z"/>
</svg>
);

FiBsFileUser.displayName = 'FiBsFileUser';
