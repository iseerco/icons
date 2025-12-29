import React from 'react';
import type { IconProps } from '../../types';

export const FiTsSterlingSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,23v1H2v-1c2.07,0,3-1.76,3-3.5v-6.5H2v-1h3V7.82C5,3.51,8.51,0,12.82,0s7.52,3.14,7.66,3.28l-.69,.72s-3.19-3-6.97-3-6.82,3.06-6.82,6.82v4.18h12v1H6v6.5c0,1.47-.51,2.7-1.37,3.5H22Z"/></svg>
);

FiTsSterlingSign.displayName = 'FiTsSterlingSign';
