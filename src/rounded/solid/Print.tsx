import React from 'react';
import type { IconProps } from '../../types';

export const Print: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,4a4,4,0,0,0-4-4H9A4,4,0,0,0,5,4V5H19Z"/><rect x="5" y="15" width={size} height={size} rx="3"/><path d="M19,7H5a5.006,5.006,0,0,0-5,5v4a5,5,0,0,0,3,4.576V18a5.006,5.006,0,0,1,5-5h8a5.006,5.006,0,0,1,5,5v2.576A5,5,0,0,0,24,16V12A5.006,5.006,0,0,0,19,7Zm-1,4H16a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Z"/></svg>
);

Print.displayName = 'Print';
