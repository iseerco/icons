import React from 'react';
import type { IconProps } from '../../types';

export const ChessKing: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M.134,12.14A2.994,2.994,0,0,1,2.122,8.389,38.51,38.51,0,0,1,11,7.023V5H8V3h3V0h2V3h3V5H13V7.023a38.51,38.51,0,0,1,8.878,1.366,3,3,0,0,1,1.989,3.751L21.448,20H2.552ZM2,22v2H22V22Z"/></svg>
);

ChessKing.displayName = 'ChessKing';
