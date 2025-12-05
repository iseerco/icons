import React from 'react';
import type { IconProps } from '../../types';

export const WineBottle: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m9.01,2.004V.005h6v1.999h-6Zm10.219,7.778l-4.219-2.813v-2.965h-6v2.965l-4.219,2.813c-1.086.724-1.741,1.924-1.775,3.224h13.994v2H3.01v9h18v-10.896c0-1.341-.666-2.585-1.781-3.328Z"/></svg>
);

WineBottle.displayName = 'WineBottle';
