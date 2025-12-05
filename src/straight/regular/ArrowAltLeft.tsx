import React from 'react';
import type { IconProps } from '../../types';

export const ArrowAltLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,11H6V5.921L.445,11.004c-.593,.532-.593,1.461,0,1.993l5.555,5.083v-5.079H24v-2Z"/></svg>
);

ArrowAltLeft.displayName = 'ArrowAltLeft';
