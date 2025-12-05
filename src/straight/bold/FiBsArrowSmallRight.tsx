import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowSmallRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17.768,10.232,13.475,5.939,11.354,8.061,13.793,10.5H5v3h8.793l-2.439,2.439,2.121,2.122,4.293-4.293A2.5,2.5,0,0,0,17.768,10.232Z"/></svg>
);

FiBsArrowSmallRight.displayName = 'FiBsArrowSmallRight';
