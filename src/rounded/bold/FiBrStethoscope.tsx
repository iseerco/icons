import React from 'react';
import type { IconProps } from '../../types';

export const FiBrStethoscope: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 9.5a3.5 3.5 0 1 0 -5 3.149v3.351a5 5 0 0 1 -10 0v-.151a7.513 7.513 0 0 0 6-7.349v-3a5.506 5.506 0 0 0 -5.5-5.5 1.5 1.5 0 0 0 0 3 2.5 2.5 0 0 1 2.5 2.5v3a4.5 4.5 0 0 1 -9 0v-3a2.5 2.5 0 0 1 2.5-2.5 1.5 1.5 0 0 0 0-3 5.506 5.506 0 0 0 -5.5 5.5v3a7.513 7.513 0 0 0 6 7.349v.151a8 8 0 0 0 16 0v-3.351a3.5 3.5 0 0 0 2-3.149z"/></svg>
);

FiBrStethoscope.displayName = 'FiBrStethoscope';
