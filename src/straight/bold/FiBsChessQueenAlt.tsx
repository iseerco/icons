import React from 'react';
import type { IconProps } from '../../types';

export const FiBsChessQueenAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19.059,19.045A62.442,62.442,0,0,1,16.232,9H18V6H15.618L17,1,14.294,2.465,12,0,9.706,2.465,7,1,8.382,6H6V9H7.768A62.442,62.442,0,0,1,4.941,19.045,3.5,3.5,0,0,0,2,22.5V24H22V22.5A3.5,3.5,0,0,0,19.059,19.045ZM13.2,9a58.944,58.944,0,0,0,2.653,10H8.145A58.944,58.944,0,0,0,10.8,9Z"/></svg>
);

FiBsChessQueenAlt.displayName = 'FiBsChessQueenAlt';
