import React from 'react';
import type { IconProps } from '../../types';

export const Target: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m20 13v-2h3.949a12.006 12.006 0 0 0 -10.949-10.949v3.949h-2v-3.949a12.006 12.006 0 0 0 -10.949 10.949h3.949v2h-3.949a12.006 12.006 0 0 0 10.949 10.949v-3.949h2v3.949a12.006 12.006 0 0 0 10.949-10.949zm-5 0h-2v2h-2v-2h-2v-2h2v-2h2v2h2z"/></svg>
);

Target.displayName = 'Target';
