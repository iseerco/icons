import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSquareMinus: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m7,10.5h10v3H7v-3ZM24,3.5v20.5H0V3.5C0,1.57,1.57,0,3.5,0h17c1.93,0,3.5,1.57,3.5,3.5Zm-3,0c0-.276-.224-.5-.5-.5H3.5c-.276,0-.5.224-.5.5v17.5h18V3.5Z"/></svg>
);

FiBsSquareMinus.displayName = 'FiBsSquareMinus';
