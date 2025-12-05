import React from 'react';
import type { IconProps } from '../../types';

export const WaveTriangle: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><polygon points="16.652 23.04 7.256 5.093 1.71 14.615 -.018 13.608 7.35 .959 16.747 18.908 22.29 9.405 24.018 10.413 16.652 23.04"/></svg>
);

WaveTriangle.displayName = 'WaveTriangle';
