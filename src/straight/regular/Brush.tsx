import React from 'react';
import type { IconProps } from '../../types';

export const Brush: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m21 0h-18a3 3 0 0 0 -3 3v9a5.006 5.006 0 0 0 5 5h4v7h6v-7h4a5.006 5.006 0 0 0 5-5v-9a3 3 0 0 0 -3-3zm-18 2h7v2h2v-2h2v4h2v-4h2v6h2v-6h1a1 1 0 0 1 1 1v7h-20v-7a1 1 0 0 1 1-1zm16 13h-6v7h-2v-7h-6a3 3 0 0 1 -3-3h20a3 3 0 0 1 -3 3z"/></svg>
);

Brush.displayName = 'Brush';
