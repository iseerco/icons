import React from 'react';
import type { IconProps } from '../../types';

export const Doctor: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m19 5h-3v-1a3 3 0 0 0 -3-3h-2a3 3 0 0 0 -3 3v1h-3a5.006 5.006 0 0 0 -5 5v8a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-8a5.006 5.006 0 0 0 -5-5zm-9-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4zm12 14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3-3v-8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zm-6-4a1 1 0 0 1 -1 1h-2v2a1 1 0 0 1 -2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1z"/></svg>
);

Doctor.displayName = 'Doctor';
