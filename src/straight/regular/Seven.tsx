import React from 'react';
import type { IconProps } from '../../types';

export const Seven: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><polygon points="8.933 24.012 7.144 23.118 17.69 2 4 2 4 0 20 0 20 1.851 8.933 24.012"/></svg>
);

Seven.displayName = 'Seven';
