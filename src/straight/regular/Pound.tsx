import React from 'react';
import type { IconProps } from '../../types';

export const Pound: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m22 22h-15.54a5.969 5.969 0 0 0 1.54-4v-4h8v-2h-8v-4a6 6 0 0 1 12 0h2a8 8 0 0 0 -16 0v4h-3v2h3v4a4 4 0 0 1 -4 4v2h20z"/></svg>
);

Pound.displayName = 'Pound';
