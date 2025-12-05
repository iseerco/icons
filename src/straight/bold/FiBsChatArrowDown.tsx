import React from 'react';
import type { IconProps } from '../../types';

export const FiBsChatArrowDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M3,20.5V0H0V20.5A3.5,3.5,0,0,0,3.5,24H24V21H3.5A.5.5,0,0,1,3,20.5Z"/><path d="M21.561,12.439,16,6.879l-2.5,2.5L8.561,4.439,6.439,6.561l7.061,7.06,2.5-2.5,3.439,3.44L17,17h5.5A1.5,1.5,0,0,0,24,15.5V10Z"/></svg>
);

FiBsChatArrowDown.displayName = 'FiBsChatArrowDown';
