import React from 'react';
import type { IconProps } from '../../types';

export const Bed: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M2,14H24v8H22V19H2v3H0V2H2Zm3.5-2A2.5,2.5,0,1,0,3,9.5,2.5,2.5,0,0,0,5.5,12ZM21,6H12A3,3,0,0,0,9,9v3H24V9A3,3,0,0,0,21,6Z"/></svg>
);

Bed.displayName = 'Bed';
