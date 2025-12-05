import React from 'react';
import type { IconProps } from '../../types';

export const FiBrAt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0A12.013,12.013,0,0,0,0,12c-.125,9.574,11.159,15.429,18.9,9.817a1.5,1.5,0,1,0-1.727-2.453C11.42,23.582,2.863,19.146,3,12,3.472.07,20.529.072,21,12v1.5a1.5,1.5,0,0,1-3,0V12C17.748,4.071,6.251,4.072,6,12a6.017,6.017,0,0,0,10.078,4.388A4.5,4.5,0,0,0,24,13.5V12A12.013,12.013,0,0,0,12,0Zm0,15a3,3,0,0,1,0-6A3,3,0,0,1,12,15Z"/></svg>
);

FiBrAt.displayName = 'FiBrAt';
