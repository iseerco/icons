import React from 'react';
import type { IconProps } from '../../types';

export const Pot: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,4V6H0V4H11V2H8V0h8V2H13V4ZM2,21a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8H2Z"/></svg>
);

Pot.displayName = 'Pot';
