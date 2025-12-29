import React from 'react';
import type { IconProps } from '../../types';

export const ChessRookAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,24H2V23a3,3,0,0,1,3-3H19a3,3,0,0,1,3,3ZM16,0V4H14V0H10V4H8V0H3V6A3.006,3.006,0,0,0,5,8.829V18H19V8.829A3.006,3.006,0,0,0,21,6V0ZM14,13H10V10a2,2,0,0,1,4,0Z"/></svg>
);

ChessRookAlt.displayName = 'ChessRookAlt';
