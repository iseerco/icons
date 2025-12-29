import React from 'react';
import type { IconProps } from '../../types';

export const RulerVertical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13,19v-2h4v-2h-4v-2h4v-2h-4v-2h4v-2h-4v-2h4V0h-7c-1.654,0-3,1.346-3,3V21c0,1.654,1.346,3,3,3h7v-5h-4Z"/></svg>
);

RulerVertical.displayName = 'RulerVertical';
