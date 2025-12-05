import React from 'react';
import type { IconProps } from '../../types';

export const FiBsWheelchair: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M8.5,3a3,3,0,1,1,3,3A3,3,0,0,1,8.5,3ZM22.016,20l-2-5H13.5a.5.5,0,0,1-.5-.5V13h6V10H13V8H10v6.5a3.5,3.5,0,0,0,2.628,3.376A5,5,0,1,1,8,11V8a8,8,0,1,0,7.737,10h2.247l2,5H24V20Z"/></svg>
);

FiBsWheelchair.displayName = 'FiBsWheelchair';
