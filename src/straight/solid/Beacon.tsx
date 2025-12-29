import React from 'react';
import type { IconProps } from '../../types';

export const Beacon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,24H12C5.38,24,0,18.62,0,12S5.38,0,12,0s12,5.38,12,12v12Z"/></svg>
);

Beacon.displayName = 'Beacon';
