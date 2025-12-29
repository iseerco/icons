import React from 'react';
import type { IconProps } from '../../types';

export const Square1: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,24H0V3C0,1.346,1.346,0,3,0H21c1.654,0,3,1.346,3,3V24ZM2,22H22V3c0-.551-.449-1-1-1H3c-.551,0-1,.449-1,1V22ZM13,6h-1.509l-3.507,3.602,1.433,1.396,1.583-1.626v8.629h2V6Z"/></svg>
);

Square1.displayName = 'Square1';
