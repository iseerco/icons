import React from 'react';
import type { IconProps } from '../../types';

export const ChessKing: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.328,10.222a5.038,5.038,0,0,0-3.27-2.389A40.142,40.142,0,0,0,13,7.014V5h2a1,1,0,0,0,0-2H13V1a1,1,0,0,0-2,0V3H9A1,1,0,0,0,9,5h2V7.014a40.142,40.142,0,0,0-7.058.819A5,5,0,0,0,.249,14.27L3.089,22H3a1,1,0,0,0,0,2H4.478q.04,0,.081,0H21a1,1,0,0,0,0-2h-.089l2.856-7.774A5.011,5.011,0,0,0,23.328,10.222ZM21.875,13.58,18.781,22H5.219L2.141,13.624A3,3,0,0,1,4.372,9.786,38.169,38.169,0,0,1,12,9a38.169,38.169,0,0,1,7.628.786A2.992,2.992,0,0,1,21.6,11.223,2.947,2.947,0,0,1,21.875,13.58Z"/></svg>
);

ChessKing.displayName = 'ChessKing';
