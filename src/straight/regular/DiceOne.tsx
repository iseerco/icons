import React from 'react';
import type { IconProps } from '../../types';

export const DiceOne: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,24H0V3A3,3,0,0,1,3,0H21a3,3,0,0,1,3,3ZM2,22H22V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3Zm9-10a1,1,0,1,0,1-1A1,1,0,0,0,11,12Z"/></svg>
);

DiceOne.displayName = 'DiceOne';
