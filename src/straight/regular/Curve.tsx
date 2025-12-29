import React from 'react';
import type { IconProps } from '../../types';

export const Curve: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m2,24H0C0,10.767,10.767,0,24,0v2C11.869,2,2,11.869,2,24Z"/>
</svg>
);

Curve.displayName = 'Curve';
