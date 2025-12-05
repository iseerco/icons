import React from 'react';
import type { IconProps } from '../../types';

export const Lock: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,8V7A7,7,0,0,0,5,7V8H2V21a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8ZM13,18H11V14h2ZM17,8H7V7A5,5,0,0,1,17,7Z"/></svg>
);

Lock.displayName = 'Lock';
