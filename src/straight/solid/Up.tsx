import React from 'react';
import type { IconProps } from '../../types';

export const Up: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16.99,24H6.99V11H.06L9.86,.88C10.43,.31,11.18,0,11.99,0h0c.8,0,1.56,.31,2.13,.88l9.82,10.12h-6.95v13Z"/></svg>
);

Up.displayName = 'Up';
