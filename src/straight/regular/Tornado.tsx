import React from 'react';
import type { IconProps } from '../../types';

export const Tornado: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16,24H14V22h2a1,1,0,0,0,0-2H12a3,3,0,0,1,0-6h7a1,1,0,0,0,0-2H6C-1.932,11.747-1.926.25,6,0H20a4,4,0,0,1,0,8H6V6H20a2,2,0,0,0,0-4H6a4,4,0,0,0,0,8H19a3,3,0,0,1,0,6H12a1,1,0,0,0,0,2h4A3,3,0,0,1,16,24Z"/></svg>
);

Tornado.displayName = 'Tornado';
