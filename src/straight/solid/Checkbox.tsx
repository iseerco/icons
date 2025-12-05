import React from 'react';
import type { IconProps } from '../../types';

export const Checkbox: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H3A3,3,0,0,0,0,3V24H24V3A3,3,0,0,0,21,0ZM10.748,17.333a2,2,0,0,1-2.829,0L3.293,12.707l1.414-1.414,4.626,4.626,9.96-9.959,1.414,1.414Z"/></svg>
);

Checkbox.displayName = 'Checkbox';
