import React from 'react';
import type { IconProps } from '../../types';

export const DiceD4: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13,0a2.962,2.962,0,0,1,1.419,1.036L24,15.236,13,24ZM11,0A2.962,2.962,0,0,0,9.581,1.036L0,15.236,11,24Z"/></svg>
);

DiceD4.displayName = 'DiceD4';
