import React from 'react';
import type { IconProps } from '../../types';

export const ArrowAltSquareLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H3C1.346,0,0,1.346,0,3V24H24V3c0-1.654-1.346-3-3-3Zm-3,13h-7v4.132l-4.629-4.236c-.494-.443-.494-1.217,0-1.66l4.629-4.236v4h7v2Z"/></svg>
);

ArrowAltSquareLeft.displayName = 'ArrowAltSquareLeft';
