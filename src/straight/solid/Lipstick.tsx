import React from 'react';
import type { IconProps } from '../../types';

export const Lipstick: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m9 7v-3.381a2 2 0 0 1 1.106-1.789l3.447-1.723a1 1 0 0 1 1.447.893v6zm10 7h-14v10h14zm-2-5h-10v3h10z"/></svg>
);

Lipstick.displayName = 'Lipstick';
