import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSquare1: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,24H0V3.5C0,1.57,1.57,0,3.5,0H20.5c1.93,0,3.5,1.57,3.5,3.5V24ZM3,21H21V3.5c0-.276-.224-.5-.5-.5H3.5c-.276,0-.5,.224-.5,.5V21ZM14,5h-2.219l-3.854,3.953,2.147,2.095,.926-.95v8.902h3V5Z"/></svg>
);

FiBsSquare1.displayName = 'FiBsSquare1';
