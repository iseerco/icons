import React from 'react';
import type { IconProps } from '../../types';

export const FiBrDiceSix: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.5,24H5.5A5.506,5.506,0,0,1,0,18.5V5.5A5.506,5.506,0,0,1,5.5,0h13A5.506,5.506,0,0,1,24,5.5v13A5.506,5.506,0,0,1,18.5,24ZM5.5,3A2.5,2.5,0,0,0,3,5.5v13A2.5,2.5,0,0,0,5.5,21h13A2.5,2.5,0,0,0,21,18.5V5.5A2.5,2.5,0,0,0,18.5,3ZM6,7.5A1.5,1.5,0,1,0,7.5,6,1.5,1.5,0,0,0,6,7.5Zm9,0A1.5,1.5,0,1,0,16.5,6,1.5,1.5,0,0,0,15,7.5Zm-9,9A1.5,1.5,0,1,0,7.5,15,1.5,1.5,0,0,0,6,16.5Zm9,0A1.5,1.5,0,1,0,16.5,15,1.5,1.5,0,0,0,15,16.5ZM6,12a1.5,1.5,0,1,0,1.5-1.5A1.5,1.5,0,0,0,6,12Zm9,0a1.5,1.5,0,1,0,1.5-1.5A1.5,1.5,0,0,0,15,12Z"/></svg>
);

FiBrDiceSix.displayName = 'FiBrDiceSix';
