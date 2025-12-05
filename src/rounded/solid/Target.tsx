import React from 'react';
import type { IconProps } from '../../types';

export const Target: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m21 13a1 1 0 0 1 0-2h2.949a12.006 12.006 0 0 0 -10.949-10.949v2.988a1 1 0 0 1 -2 0v-2.988a12.006 12.006 0 0 0 -10.949 10.949h2.949a1 1 0 0 1 0 2h-2.949a12.006 12.006 0 0 0 10.949 10.949v-2.949a1 1 0 0 1 2 0v2.949a12.006 12.006 0 0 0 10.949-10.949zm-6 0h-2v2a1 1 0 0 1 -2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z"/></svg>
);

Target.displayName = 'Target';
