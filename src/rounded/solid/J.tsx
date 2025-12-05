import React from 'react';
import type { IconProps } from '../../types';

export const J: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17,24H7c-2.757,0-5-2.243-5-5v-1c0-.552,.447-1,1-1s1,.448,1,1v1c0,1.654,1.346,3,3,3h10c1.654,0,3-1.346,3-3V1c0-.552,.447-1,1-1s1,.448,1,1V19c0,2.757-2.243,5-5,5Z"/></svg>
);

J.displayName = 'J';
