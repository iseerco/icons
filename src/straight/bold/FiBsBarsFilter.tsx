import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBarsFilter: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,2v3H0V2H24ZM8,23h8v-3H8v3ZM4,14H20v-3H4v3Z"/></svg>
);

FiBsBarsFilter.displayName = 'FiBsBarsFilter';
