import React from 'react';
import type { IconProps } from '../../types';

export const FiBrGameBoardAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.5,0H5.5A5.506,5.506,0,0,0,0,5.5v13A5.506,5.506,0,0,0,5.5,24h13A5.506,5.506,0,0,0,24,18.5V5.5A5.506,5.506,0,0,0,18.5,0ZM3,18.5V12h9V3h6.5A2.5,2.5,0,0,1,21,5.5V12H12v9H5.5A2.5,2.5,0,0,1,3,18.5Z"/></svg>
);

FiBrGameBoardAlt.displayName = 'FiBrGameBoardAlt';
