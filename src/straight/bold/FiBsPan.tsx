import React from 'react';
import type { IconProps } from '../../types';

export const FiBsPan: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14,0A9.979,9.979,0,0,0,5.448,15.156L.015,20.605,3.41,24l5.434-5.448A9.994,9.994,0,1,0,14,0Zm0,17a7,7,0,1,1,7-7A7.009,7.009,0,0,1,14,17Zm2-7h3a5,5,0,1,1-5-5V8a2,2,0,1,0,2,2Z"/></svg>
);

FiBsPan.displayName = 'FiBsPan';
