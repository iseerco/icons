import React from 'react';
import type { IconProps } from '../../types';

export const GymBag: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m19 9v-1c0-3.859-3.141-7-7-7s-7 3.141-7 7v1c-2.757 0-5 2.243-5 5v4c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5v-4c0-2.757-2.243-5-5-5zm-12-1c0-2.757 2.243-5 5-5s5 2.243 5 5v1h-10zm10 3v10h-10v-10zm-15 7v-4c0-1.654 1.346-3 3-3v10c-1.654 0-3-1.346-3-3zm20 0c0 1.654-1.346 3-3 3v-10c1.654 0 3 1.346 3 3zm-12-3c0-.553.448-1 1-1h2c.553 0 1 .447 1 1s-.447 1-1 1h-2c-.552 0-1-.447-1-1z"/></svg>
);

GymBag.displayName = 'GymBag';
