import React from 'react';
import type { IconProps } from '../../types';

export const ArrowFromRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23,5a1,1,0,0,0-1,1v5H2.579L6.872,6.707A1,1,0,0,0,5.458,5.293L.879,9.872a3,3,0,0,0,0,4.242l4.579,4.578a1,1,0,1,0,1.414-1.414L2.593,13H22v5a1,1,0,0,0,2,0V6A1,1,0,0,0,23,5Z"/></svg>
);

ArrowFromRight.displayName = 'ArrowFromRight';
