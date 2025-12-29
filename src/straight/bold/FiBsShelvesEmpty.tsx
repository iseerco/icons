import React from 'react';
import type { IconProps } from '../../types';

export const FiBsShelvesEmpty: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m20.994,0v7H2.994V0H-.006v24h3v-2h18v2h3V0h-3ZM2.994,19v-9h18v9H2.994Z"/>
</svg>
);

FiBsShelvesEmpty.displayName = 'FiBsShelvesEmpty';
