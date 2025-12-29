import React from 'react';
import type { IconProps } from '../../types';

export const FiTs4: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,0V14H6.5c-.827,0-1.5-.673-1.5-1.5V0h-1V12.5c0,1.378,1.121,2.5,2.5,2.5h12.5v9h1V0h-1Z"/></svg>
);

FiTs4.displayName = 'FiTs4';
