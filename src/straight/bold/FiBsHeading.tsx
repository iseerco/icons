import React from 'react';
import type { IconProps } from '../../types';

export const FiBsHeading: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m22,3v18h2v3h-7v-3h2v-8H5v8h2v3H0v-3h2V3H0V0h7v3h-2v7h14V3h-2V0h7v3h-2Z"/></svg>
);

FiBsHeading.displayName = 'FiBsHeading';
