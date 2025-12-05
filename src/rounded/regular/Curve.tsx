import React from 'react';
import type { IconProps } from '../../types';

export const Curve: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m1,24c-.552,0-1-.447-1-1C0,10.317,10.318,0,23,0c.553,0,1,.447,1,1s-.447,1-1,1C11.42,2,2,11.421,2,23c0,.553-.448,1-1,1Z"/>
</svg>
);

Curve.displayName = 'Curve';
