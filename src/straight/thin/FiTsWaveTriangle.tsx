import React from 'react';
import type { IconProps } from '../../types';

export const FiTsWaveTriangle: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m23.94,9.907l-7.119,13.19L7.134,3.098.94,14.59l-.88-.475L7.182.902l9.688,20.001,6.191-11.47.88.475Z"/></svg>
);

FiTsWaveTriangle.displayName = 'FiTsWaveTriangle';
