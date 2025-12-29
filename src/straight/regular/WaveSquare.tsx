import React from 'react';
import type { IconProps } from '../../types';

export const WaveSquare: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m18,22h-4c-1.654,0-3-1.346-3-3V5c0-.551-.449-1-1-1h-4c-.551,0-1,.449-1,1v8H0v-2h3v-6c0-1.654,1.346-3,3-3h4c1.654,0,3,1.346,3,3v14c0,.551.449,1,1,1h4c.551,0,1-.449,1-1v-8h5v2h-3v6c0,1.654-1.346,3-3,3Z"/></svg>
);

WaveSquare.displayName = 'WaveSquare';
