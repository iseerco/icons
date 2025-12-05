import React from 'react';
import type { IconProps } from '../../types';

export const CrossReligion: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16,24H8V14H2v-5c0-1.654,1.346-3,3-3h3V3c0-1.654,1.346-3,3-3h2c1.654,0,3,1.346,3,3v3h3c1.654,0,3,1.346,3,3v5h-6v10Zm-6-2h4V12h6v-3c0-.552-.449-1-1-1h-5V3c0-.552-.449-1-1-1h-2c-.551,0-1,.448-1,1v5H5c-.551,0-1,.448-1,1v3h6v10Z"/></svg>
);

CrossReligion.displayName = 'CrossReligion';
