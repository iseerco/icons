import React from 'react';
import type { IconProps } from '../../types';

export const Pyramid: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M10.1,1.243,0,24H24L13.905,1.243A2.088,2.088,0,0,0,10.1,1.243Z"/></svg>
);

Pyramid.displayName = 'Pyramid';
