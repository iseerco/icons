import React from 'react';
import type { IconProps } from '../../types';

export const FiBrPot: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22.5,5h-9V3h1a1.5,1.5,0,0,0,0-3h-5a1.5,1.5,0,0,0,0,3h1V5h-9a1.5,1.5,0,0,0,0,3H2V18.5A5.506,5.506,0,0,0,7.5,24h9A5.506,5.506,0,0,0,22,18.5V8h.5a1.5,1.5,0,0,0,0-3ZM19,18.5A2.5,2.5,0,0,1,16.5,21h-9A2.5,2.5,0,0,1,5,18.5V8H19Z"/></svg>
);

FiBrPot.displayName = 'FiBrPot';
