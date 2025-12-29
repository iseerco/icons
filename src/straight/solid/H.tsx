import React from 'react';
import type { IconProps } from '../../types';

export const H: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><polygon points="20 0 20 11 4 11 4 0 2 0 2 24 4 24 4 13 20 13 20 24 22 24 22 0 20 0"/></svg>
);

H.displayName = 'H';
