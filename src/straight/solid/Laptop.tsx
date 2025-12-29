import React from 'react';
import type { IconProps } from '../../types';

export const Laptop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M8.991,18l-.846-1H0v1a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V17H15.86l-.847,1Z"/><polygon points="9.082 15 9.929 16 14.086 16 14.932 15 22 15 22 3 2 3 2 15 9.082 15"/></svg>
);

Laptop.displayName = 'Laptop';
