import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBarsStaggered: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,5H0V2H19v3ZM0,21H19v-3H0v3ZM5,10v3H24v-3H5Z"/></svg>
);

FiBsBarsStaggered.displayName = 'FiBsBarsStaggered';
