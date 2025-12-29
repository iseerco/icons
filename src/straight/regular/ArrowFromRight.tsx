import React from 'react';
import type { IconProps } from '../../types';

export const ArrowFromRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,5v6H2.793L7.1,6.7,5.682,5.283.732,10.232a2.5,2.5,0,0,0,0,3.536l4.95,4.949L7.1,17.3,2.793,13H22v6h2V5Z"/></svg>
);

ArrowFromRight.displayName = 'ArrowFromRight';
