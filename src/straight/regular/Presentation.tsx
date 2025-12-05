import React from 'react';
import type { IconProps } from '../../types';

export const Presentation: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 16v-2h-2v-11a3 3 0 0 0 -3-3h-14a3 3 0 0 0 -3 3v11h-2v2h11v4h-2a3 3 0 0 0 -3 3v1h2v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h2v-1a3 3 0 0 0 -3-3h-2v-4zm-20-13a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v11h-16z"/></svg>
);

Presentation.displayName = 'Presentation';
