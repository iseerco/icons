import React from 'react';
import type { IconProps } from '../../types';

export const BracketsRound: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M5.77,23.97c-.24-.18-5.77-4.56-5.77-11.97S5.54,.21,5.77,.03l1.23,1.58S2,5.6,2,12s4.95,10.35,5,10.39l-1.23,1.58ZM24,12C24,4.6,18.46,.21,18.23,.03l-1.23,1.58s5,3.99,5,10.39-4.95,10.35-5,10.39l1.23,1.58c.24-.18,5.77-4.56,5.77-11.97Z"/></svg>
);

BracketsRound.displayName = 'BracketsRound';
