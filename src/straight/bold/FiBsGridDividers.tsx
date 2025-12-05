import React from 'react';
import type { IconProps } from '../../types';

export const FiBsGridDividers: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,3H0V0H24V3Zm0,10H0v3H24v-3ZM6,5H0v6H6V5Zm9,0h-6v6h6V5Zm9,0h-6v6h6V5ZM6,18H0v6H6v-6Zm9,0h-6v6h6v-6Zm9,0h-6v6h6v-6Z"/></svg>
);

FiBsGridDividers.displayName = 'FiBsGridDividers';
