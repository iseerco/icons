import React from 'react';
import type { IconProps } from '../../types';

export const RulerVertical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14,19c-.553,0-1-.447-1-1s.447-1,1-1h2.949v-2h-2.949c-.553,0-1-.447-1-1s.447-1,1-1h2.949v-2h-2.949c-.553,0-1-.447-1-1s.447-1,1-1h2.949v-2h-2.949c-.553,0-1-.447-1-1s.447-1,1-1h2.949v-1.5c0-1.933-1.567-3.5-3.5-3.5h-3c-1.933,0-3.5,1.567-3.5,3.5V20.5c0,1.933,1.567,3.5,3.5,3.5h3c1.933,0,3.5-1.567,3.5-3.5v-1.5h-2.949Z"/></svg>
);

RulerVertical.displayName = 'RulerVertical';
