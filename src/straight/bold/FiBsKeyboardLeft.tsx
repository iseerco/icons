import React from 'react';
import type { IconProps } from '../../types';

export const FiBsKeyboardLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m24,3v3h-15v12h15v3H6V6c0-1.654,1.346-3,3-3h15Zm-13,5v3h3v-3h-3Zm5,0v3h3v-3h-3Zm5,3h3v-3h-3v3Zm-10,5h13v-3h-13v3ZM.371,12.825l3.629,3.321V7.843L.371,11.164c-.494.443-.494,1.217,0,1.66Z"/>
</svg>
);

FiBsKeyboardLeft.displayName = 'FiBsKeyboardLeft';
