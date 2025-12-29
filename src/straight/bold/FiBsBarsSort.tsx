import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBarsSort: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,2v3H0V2H24ZM0,23H8v-3H0v3ZM0,14H16v-3H0v3Z"/></svg>
);

FiBsBarsSort.displayName = 'FiBsBarsSort';
