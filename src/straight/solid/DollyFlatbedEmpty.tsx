import React from 'react';
import type { IconProps } from '../../types';

export const DollyFlatbedEmpty: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m24,18H6c-.551,0-1-.448-1-1V3c0-1.654-1.346-3-3-3H0v2h2c.551,0,1,.448,1,1v14c0,1.654,1.346,3,3,3v1c0,1.654,1.346,3,3,3s3-1.346,3-3v-1h5v1c0,1.654,1.346,3,3,3s3-1.346,3-3v-1h1v-2Z"/>
</svg>
);

DollyFlatbedEmpty.displayName = 'DollyFlatbedEmpty';
