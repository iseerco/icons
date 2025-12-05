import React from 'react';
import type { IconProps } from '../../types';

export const Brush: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m0 10v-7a3 3 0 0 1 3-3h8v4h2v-4h2v6h2v-6h2v8h2v-8a3 3 0 0 1 3 3v7zm5 7h4v7h6v-7h4a5.006 5.006 0 0 0 5-5h-24a5.006 5.006 0 0 0 5 5z"/></svg>
);

Brush.displayName = 'Brush';
