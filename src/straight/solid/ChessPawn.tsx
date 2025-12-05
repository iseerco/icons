import React from 'react';
import type { IconProps } from '../../types';

export const ChessPawn: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M4,14V12H7.111a7,7,0,1,1,9.778,0H20v2Zm13,3V16H7v1a5.006,5.006,0,0,1-5,5v2H22V22A5.006,5.006,0,0,1,17,17Z"/></svg>
);

ChessPawn.displayName = 'ChessPawn';
