import React from 'react';
import type { IconProps } from '../../types';

export const Pallet: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m24,20v1c0,.553-.448,1-1,1s-1-.447-1-1v-1c0-.552-.449-1-1-1h-8v2c0,.553-.448,1-1,1s-1-.447-1-1v-2H3c-.551,0-1,.448-1,1v1c0,.553-.448,1-1,1s-1-.447-1-1v-1c0-1.654,1.346-3,3-3h18c1.654,0,3,1.346,3,3Z"/>
</svg>
);

Pallet.displayName = 'Pallet';
