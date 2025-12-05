import React from 'react';
import type { IconProps } from '../../types';

export const Doctor: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m21 5h-5v-4h-8v4h-5a3 3 0 0 0 -3 3v15h24v-15a3 3 0 0 0 -3-3zm-11-2h4v2h-4zm12 18h-20v-13a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-9-8h3v2h-3v3h-2v-3h-3v-2h3v-3h2z"/></svg>
);

Doctor.displayName = 'Doctor';
