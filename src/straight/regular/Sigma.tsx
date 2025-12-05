import React from 'react';
import type { IconProps } from '../../types';

export const Sigma: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m19,24H2v-1.9l9.619-10.1L2,1.9V0h17c1.654,0,3,1.346,3,3v2h-2v-2c0-.551-.448-1-1-1H4.857l9.523,10-9.523,10h14.143c.552,0,1-.449,1-1v-2h2v2c0,1.654-1.346,3-3,3Z"/></svg>
);

Sigma.displayName = 'Sigma';
