import React from 'react';
import type { IconProps } from '../../types';

export const ChessKingAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16.385,8l1.5-3.331A2,2,0,0,0,16,2H13V0H11V2H8a2,2,0,0,0-1.634.847,2.031,2.031,0,0,0-.22,1.9L7.614,8H6v2H18V8ZM22,24H2V23a3,3,0,0,1,3-3H19a3,3,0,0,1,3,3ZM5.393,18a27.874,27.874,0,0,0,2.193-6h8.828a27.819,27.819,0,0,0,2.193,6Z"/></svg>
);

ChessKingAlt.displayName = 'ChessKingAlt';
