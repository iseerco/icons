import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBetamax: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M11,13c0,1.66-1.34,3-3,3s-3-1.34-3-3,1.34-3,3-3,3,1.34,3,3Zm2,3h6v-6h-6v6ZM24,6.5v14.5H0V6.5c0-1.93,1.57-3.5,3.5-3.5H20.5c1.93,0,3.5,1.57,3.5,3.5Zm-3,11.5V8H3v10H21Z"/></svg>
);

FiBsBetamax.displayName = 'FiBsBetamax';
