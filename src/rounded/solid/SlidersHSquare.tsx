import React from 'react';
import type { IconProps } from '../../types';

export const SlidersHSquare: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-1,17h-2v1c0,.553-.447,1-1,1s-1-.447-1-1v-1H6c-.553,0-1-.447-1-1s.447-1,1-1h8v-1c0-.553.447-1,1-1s1,.447,1,1v1h2c.553,0,1,.447,1,1s-.447,1-1,1Zm0-8h-8v1c0,.553-.447,1-1,1s-1-.447-1-1v-1h-2c-.553,0-1-.447-1-1s.447-1,1-1h2v-1c0-.553.447-1,1-1s1,.447,1,1v1h8c.553,0,1,.447,1,1s-.447,1-1,1Z"/></svg>
);

SlidersHSquare.displayName = 'SlidersHSquare';
