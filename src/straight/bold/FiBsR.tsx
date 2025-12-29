import React from 'react';
import type { IconProps } from '../../types';

export const FiBsR: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,8C22,3.589,18.411,0,14,0H5.5c-1.93,0-3.5,1.57-3.5,3.5V24h3v-8H13.973l4.572,8h3.455l-4.923-8.616c2.888-1.208,4.923-4.063,4.923-7.384ZM5,3.5c0-.275,.224-.5,.5-.5H14c2.757,0,5,2.243,5,5s-2.243,5-5,5H5V3.5Z"/></svg>
);

FiBsR.displayName = 'FiBsR';
