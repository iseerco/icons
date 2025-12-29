import React from 'react';
import type { IconProps } from '../../types';

export const InputNumeric: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m21,2.5H3c-1.654,0-3,1.346-3,3v15h24V5.5c0-1.654-1.346-3-3-3Zm-13,14.5h-2v-6.621l-1.284,1.318-1.433-1.395,3.215-3.303h1.501v10Z"/></svg>
);

InputNumeric.displayName = 'InputNumeric';
