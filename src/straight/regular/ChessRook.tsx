import React from 'react';
import type { IconProps } from '../../types';

export const ChessRook: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18,0V4H15V0H9V4H6V0H0V9a3,3,0,0,0,3,3V22H1v2H23V22H21V12a3,3,0,0,0,3-3V0Zm4,9a1,1,0,0,1-1,1H19V22H5V10H3A1,1,0,0,1,2,9V2H4V6h7V2h2V6h7V2h2ZM12,11a3,3,0,0,0-3,3v4h6V14A3,3,0,0,0,12,11Zm1,5H11V14a1,1,0,0,1,2,0Z"/></svg>
);

ChessRook.displayName = 'ChessRook';
