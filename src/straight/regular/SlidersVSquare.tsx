import React from 'react';
import type { IconProps } from '../../types';

export const SlidersVSquare: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm1,22H2V3c0-.552.448-1,1-1h18c.552,0,1,.448,1,1v19Zm-13-14h2v2h-2v9h-2v-9h-2v-2h2v-3h2v3Zm8,6h2v2h-2v3h-2v-3h-2v-2h2V5h2v9Z"/></svg>
);

SlidersVSquare.displayName = 'SlidersVSquare';
