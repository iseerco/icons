import React from 'react';
import type { IconProps } from '../../types';

export const FiBsDiceSix: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,24H0V3.5A3.5,3.5,0,0,1,3.5,0h17A3.5,3.5,0,0,1,24,3.5ZM3,21H21V3.5a.5.5,0,0,0-.5-.5H3.5a.5.5,0,0,0-.5.5ZM6,7.5A1.5,1.5,0,1,0,7.5,6,1.5,1.5,0,0,0,6,7.5Zm9,0A1.5,1.5,0,1,0,16.5,6,1.5,1.5,0,0,0,15,7.5Zm-9,9A1.5,1.5,0,1,0,7.5,15,1.5,1.5,0,0,0,6,16.5Zm9,0A1.5,1.5,0,1,0,16.5,15,1.5,1.5,0,0,0,15,16.5ZM6,12a1.5,1.5,0,1,0,1.5-1.5A1.5,1.5,0,0,0,6,12Zm9,0a1.5,1.5,0,1,0,1.5-1.5A1.5,1.5,0,0,0,15,12Z"/></svg>
);

FiBsDiceSix.displayName = 'FiBsDiceSix';
