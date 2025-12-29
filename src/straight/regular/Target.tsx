import React from 'react';
import type { IconProps } from '../../types';

export const Target: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm1 21.949v-2.949h-2v2.949a10.015 10.015 0 0 1 -8.949-8.949h2.949v-2h-2.949a10.015 10.015 0 0 1 8.949-8.949v2.949h2v-2.949a10.015 10.015 0 0 1 8.949 8.949h-2.949v2h2.949a10.015 10.015 0 0 1 -8.949 8.949zm0-10.949h2v2h-2v2h-2v-2h-2v-2h2v-2h2z"/></svg>
);

Target.displayName = 'Target';
