import React from 'react';
import type { IconProps } from '../../types';

export const WineGlassEmpty: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m4,0v10c0,4.072,3.06,7.436,7,7.931v4.069h-4v2h10v-2h-4v-4.069c3.94-.495,7-3.859,7-7.931V0H4Zm14,10c0,3.309-2.691,6-6,6s-6-2.691-6-6V2h12v8Z"/>
</svg>
);

WineGlassEmpty.displayName = 'WineGlassEmpty';
