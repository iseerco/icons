import React from 'react';
import type { IconProps } from '../../types';

export const Tablet: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><rect x="2" width={size} height={size}/><path d="M13,19v2H11V19H2v2a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V19Z"/></svg>
);

Tablet.displayName = 'Tablet';
