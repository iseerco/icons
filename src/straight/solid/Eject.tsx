import React from 'react';
import type { IconProps } from '../../types';

export const Eject: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m24,20v2H0v-2h24Zm-.043-2H.044L12,1.817l11.957,16.183Z"/></svg>
);

Eject.displayName = 'Eject';
