import React from 'react';
import type { IconProps } from '../../types';

export const SkullCrossbones: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m15.069,19.006l8.846,3.048-.651,1.891-11.264-3.881L.736,23.945l-.651-1.891,8.846-3.048L.084,15.958l.651-1.891,11.264,3.881,11.264-3.881.651,1.891-8.846,3.048Zm-7.069-7.006h-3v-5c0-3.86,3.14-7,7-7s7,3.14,7,7v5h-3v3h-8v-3Zm5-4.5c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5,1.5Zm-5,0c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5,1.5Z"/></svg>
);

SkullCrossbones.displayName = 'SkullCrossbones';
