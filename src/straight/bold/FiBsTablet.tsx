import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTablet: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M2,0V21a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V0ZM13,18v2H11V18H5V3H19l0,15Z"/></svg>
);

FiBsTablet.displayName = 'FiBsTablet';
