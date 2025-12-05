import React from 'react';
import type { IconProps } from '../../types';

export const FiBsPot: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,5H13.5V3H16V0H8V3h2.5V5H0V8H2V20.5A3.5,3.5,0,0,0,5.5,24h13A3.5,3.5,0,0,0,22,20.5V8h2ZM19,20.5a.5.5,0,0,1-.5.5H5.5a.5.5,0,0,1-.5-.5V8H19Z"/></svg>
);

FiBsPot.displayName = 'FiBsPot';
