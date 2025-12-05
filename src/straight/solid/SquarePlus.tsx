import React from 'react';
import type { IconProps } from '../../types';

export const SquarePlus: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H3C1.346,0,0,1.346,0,3V24H24V3c0-1.654-1.346-3-3-3Zm-4,13h-4v4h-2v-4H7v-2h4V7h2v4h4v2Z"/></svg>
);

SquarePlus.displayName = 'SquarePlus';
