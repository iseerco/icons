import React from 'react';
import type { IconProps } from '../../types';

export const FiTsBarsStaggered: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,4H0v-1H19v1ZM0,20H19v-1H0v1ZM5,11v1H24v-1H5Z"/></svg>
);

FiTsBarsStaggered.displayName = 'FiTsBarsStaggered';
