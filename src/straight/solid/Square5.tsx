import React from 'react';
import type { IconProps } from '../../types';

export const Square5: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H3C1.346,0,0,1.346,0,3V24H24V3c0-1.654-1.346-3-3-3ZM12,18h-4v-2h4c1.103,0,2-.897,2-2s-.897-2-2-2h-4V6h7v2h-5v2h2c2.206,0,4,1.794,4,4s-1.794,4-4,4Z"/></svg>
);

Square5.displayName = 'Square5';
