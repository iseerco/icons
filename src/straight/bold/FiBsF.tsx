import React from 'react';
import type { IconProps } from '../../types';

export const FiBsF: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M5.5,3H22V0H5.5c-1.93,0-3.5,1.57-3.5,3.5V24h3V14h13v-3H5V3.5c0-.276,.224-.5,.5-.5Z"/></svg>
);

FiBsF.displayName = 'FiBsF';
