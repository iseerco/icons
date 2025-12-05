import React from 'react';
import type { IconProps } from '../../types';

export const FiBsGreaterThanEqual: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m3,21h18v3H3v-3ZM3,.026v3.38l11.746,6.101L3,15.608v3.38l18.254-9.481L3,.026Z"/>
</svg>
);

FiBsGreaterThanEqual.displayName = 'FiBsGreaterThanEqual';
