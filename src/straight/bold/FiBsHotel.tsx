import React from 'react';
import type { IconProps } from '../../types';

export const FiBsHotel: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17.5,0H6.5c-1.93,0-3.5,1.57-3.5,3.5V24H21V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21h-3v-3h1v-3H8v3h1v3h-3V3.5c0-.276,.224-.5,.5-.5h11c.276,0,.5,.224,.5,.5V21ZM8,10h3v3h-3v-3Zm5,0h3v3h-3v-3Zm-5-5h3v3h-3v-3Zm5,0h3v3h-3v-3Z"/></svg>
);

FiBsHotel.displayName = 'FiBsHotel';
