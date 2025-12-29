import React from 'react';
import type { IconProps } from '../../types';

export const RulerCombined: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,15v4h-2v-4h-2v4h-2v-4h-2v4h-2v-4H5v-2h4v-2H5v-2h4v-2H5v-2h4V0H3C1.346,0,0,1.346,0,3V21c0,1.654,1.346,3,3,3H21c1.654,0,3-1.346,3-3v-6h-5Z"/></svg>
);

RulerCombined.displayName = 'RulerCombined';
