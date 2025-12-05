import React from 'react';
import type { IconProps } from '../../types';

export const FiBsLessThanEqual: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m3,21h18v3H3v-3ZM21,.026L2.746,9.507l18.254,9.481v-3.38l-11.746-6.101,11.746-6.101V.026Z"/>
</svg>
);

FiBsLessThanEqual.displayName = 'FiBsLessThanEqual';
