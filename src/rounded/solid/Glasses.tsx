import React from 'react';
import type { IconProps } from '../../types';

export const Glasses: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m20 0a4 4 0 0 0 -4 4 1 1 0 0 0 2 0 2 2 0 0 1 4 0v11.026a4.948 4.948 0 0 0 -3-1.026 5 5 0 0 0 -4.145 2.207 3.98 3.98 0 0 0 -5.71 0 5 5 0 0 0 -4.145-2.207 4.948 4.948 0 0 0 -3 1.026v-11.026a2 2 0 0 1 4 0 1 1 0 0 0 2 0 4 4 0 0 0 -8 0v15a5 5 0 0 0 10 0 2 2 0 0 1 4 0 5 5 0 0 0 10 0v-15a4 4 0 0 0 -4-4z"/></svg>
);

Glasses.displayName = 'Glasses';
