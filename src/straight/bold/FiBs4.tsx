import React from 'react';
import type { IconProps } from '../../types';

export const FiBs4: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17,0V12H7.5c-.275,0-.5-.224-.5-.5V0h-3V11.5c0,1.93,1.57,3.5,3.5,3.5h9.5v9h3V0h-3Z"/></svg>
);

FiBs4.displayName = 'FiBs4';
