import React from 'react';
import type { IconProps } from '../../types';

export const BandAid: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m5 5v14h-5v-14zm19 14v-14h-5v14zm-7-14v14h-10v-14zm-4 5a1 1 0 1 0 1-1 1 1 0 0 0 -1 1zm-2 4a1 1 0 1 0 -1 1 1 1 0 0 0 1-1zm0-4a1 1 0 1 0 -1 1 1 1 0 0 0 1-1zm4 4a1 1 0 1 0 -1 1 1 1 0 0 0 1-1z"/></svg>
);

BandAid.displayName = 'BandAid';
