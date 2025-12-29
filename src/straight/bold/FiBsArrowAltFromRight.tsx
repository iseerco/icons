import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowAltFromRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,3v7.5H6V6L.445,11.083c-.593,.532-.593,1.461,0,1.993l5.555,5.083v-4.659h15v7.5h3V3h-3Z"/></svg>
);

FiBsArrowAltFromRight.displayName = 'FiBsArrowAltFromRight';
