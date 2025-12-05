import React from 'react';
import type { IconProps } from '../../types';

export const BandAid: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><circle cx="10" cy="10" r="1"/><circle cx="14" cy="10" r="1"/><circle cx="10" cy="14" r="1"/><circle cx="14" cy="14" r="1"/><path d="m0 5v14h24v-14zm17 2v10h-10v-10zm-15 0h3v10h-3zm20 10h-3v-10h3z"/></svg>
);

BandAid.displayName = 'BandAid';
