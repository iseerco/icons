import React from 'react';
import type { IconProps } from '../../types';

export const FiBsChessBoard: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18,6v4H14V6Zm6-2.5V24H0V3.5A3.5,3.5,0,0,1,3.5,0h17A3.5,3.5,0,0,1,24,3.5ZM21,6H18V3H14V6H10V3H6V6H3v4H6v4H3v4H6v3h4V18h4v3h4V18h3V14H18V10h3ZM10,6H6v4h4Zm4,12h4V14H14Zm-4-4h4V10H10ZM6,14v4h4V14Z"/></svg>
);

FiBsChessBoard.displayName = 'FiBsChessBoard';
