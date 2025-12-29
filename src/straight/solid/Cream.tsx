import React from 'react';
import type { IconProps } from '../../types';

export const Cream: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 24h-24v-7a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3zm-2-15h-20v3h20zm-2.035-2c-.332-4.72-2.945-6.715-3.065-6.8l-.263-.2h-1.637v1a1.883 1.883 0 0 1 -2 2h-3a5.538 5.538 0 0 0 -5.668 4z"/></svg>
);

Cream.displayName = 'Cream';
