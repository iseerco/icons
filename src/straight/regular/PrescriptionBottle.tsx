import React from 'react';
import type { IconProps } from '../../types';

export const PrescriptionBottle: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m23,3c0-1.654-1.346-3-3-3H4C2.346,0,1,1.346,1,3v3h2v15c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3V6h2v-3Zm-4,18c0,.552-.449,1-1,1H6c-.551,0-1-.448-1-1v-2h4v-2h-4v-2h4v-2h-4v-2h4v-2h-4v-3h14v15Zm2-17H3v-1c0-.552.449-1,1-1h16c.551,0,1,.448,1,1v1Z"/></svg>
);

PrescriptionBottle.displayName = 'PrescriptionBottle';
