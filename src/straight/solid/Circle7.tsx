import React from 'react';
import type { IconProps } from '../../types';

export const Circle7: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M10.78,17.987l-1.79-.893,4.537-9.095h-5.527v-2h8v1.522l-5.22,10.465Zm13.22-5.987C24,5.383,18.617,0,12,0S0,5.383,0,12s5.383,12,12,12,12-5.383,12-12Z"/></svg>
);

Circle7.displayName = 'Circle7';
