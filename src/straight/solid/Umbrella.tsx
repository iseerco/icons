import React from 'react';
import type { IconProps } from '../../types';

export const Umbrella: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 14a12.009 12.009 0 0 0 -11-11.949v-2.051h-2v2.051a12.009 12.009 0 0 0 -11 11.949v1h11v6a1 1 0 0 1 -2 0h-2a3 3 0 0 0 6 0v-6h11z"/></svg>
);

Umbrella.displayName = 'Umbrella';
