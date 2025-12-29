import React from 'react';
import type { IconProps } from '../../types';

export const FiBsDiceThree: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,24H0V3.5A3.5,3.5,0,0,1,3.5,0h17A3.5,3.5,0,0,1,24,3.5ZM3,21H21V3.5a.5.5,0,0,0-.5-.5H3.5a.5.5,0,0,0-.5.5Zm7.5-9A1.5,1.5,0,1,0,12,10.5,1.5,1.5,0,0,0,10.5,12ZM6,7.5A1.5,1.5,0,1,0,7.5,6,1.5,1.5,0,0,0,6,7.5Zm9,9A1.5,1.5,0,1,0,16.5,15,1.5,1.5,0,0,0,15,16.5Z"/></svg>
);

FiBsDiceThree.displayName = 'FiBsDiceThree';
