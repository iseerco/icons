import React from 'react';
import type { IconProps } from '../../types';

export const FiBsApartment: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13.5,18h-3v-3h3v3Zm0-13h-3v3h3v-3Zm0,5h-3v3h3v-3Zm10.5-1.5c0-1.93-1.57-3.5-3.5-3.5h-1.5v-1.5c0-1.93-1.57-3.5-3.5-3.5h-7c-1.93,0-3.5,1.57-3.5,3.5v6.5h-1.5c-1.93,0-3.5,1.57-3.5,3.5v10.5H24V8.5ZM3,13.5c0-.275,.224-.5,.5-.5h4.5V3.5c0-.275,.224-.5,.5-.5h7c.276,0,.5,.225,.5,.5v4.5h4.5c.276,0,.5,.225,.5,.5v12.5H3v-7.5Zm16,1.5h-3v3h3v-3Zm-11,0h-3v3h3v-3Zm11-5h-3v3h3v-3Z"/></svg>
);

FiBsApartment.displayName = 'FiBsApartment';
