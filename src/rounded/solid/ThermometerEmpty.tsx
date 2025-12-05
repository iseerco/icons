import React from 'react';
import type { IconProps } from '../../types';

export const ThermometerEmpty: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m16.5,12.111v-7.111c0-2.757-2.243-5-5-5s-5,2.243-5,5v7.111c-1.276,1.305-2,3.063-2,4.889,0,3.859,3.141,7,7,7s7-3.141,7-7c0-1.826-.724-3.584-2-4.889Zm-5,7.889c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Z"/>
</svg>
);

ThermometerEmpty.displayName = 'ThermometerEmpty';
