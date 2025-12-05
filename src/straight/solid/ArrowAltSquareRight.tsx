import React from 'react';
import type { IconProps } from '../../types';

export const ArrowAltSquareRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H3C1.346,0,0,1.346,0,3V24H24V3c0-1.654-1.346-3-3-3Zm-3.371,12.896l-4.629,4.236v-4.132H6v-2h7V7l4.629,4.236c.494,.443,.494,1.217,0,1.66Z"/></svg>
);

ArrowAltSquareRight.displayName = 'ArrowAltSquareRight';
