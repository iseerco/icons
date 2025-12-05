import React from 'react';
import type { IconProps } from '../../types';

export const Ethernet: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m21,8v-3h-3v-3H6v3h-3v3H0v11c0,1.654,1.346,3,3,3h2v-5h2v5h2v-5h2v5h2v-5h2v5h2v-5h2v5h2c1.654,0,3-1.346,3-3v-11h-3Z"/>
</svg>
);

Ethernet.displayName = 'Ethernet';
