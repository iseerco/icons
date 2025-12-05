import React from 'react';
import type { IconProps } from '../../types';

export const SlidersHSquare: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm1,22H2V3c0-.552.448-1,1-1h18c.552,0,1,.448,1,1v19ZM10,7h9v2h-9v2h-2v-2h-3v-2h3v-2h2v2Zm6,8h3v2h-3v2h-2v-2H5v-2h9v-2h2v2Z"/></svg>
);

SlidersHSquare.displayName = 'SlidersHSquare';
