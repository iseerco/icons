import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCurve: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m24,0v3C12.42,3,3,12.421,3,24H0C0,10.767,10.767,0,24,0Z"/>
</svg>
);

FiBsCurve.displayName = 'FiBsCurve';
