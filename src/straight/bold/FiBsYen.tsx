import React from 'react';
import type { IconProps } from '../../types';

export const FiBsYen: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m23.189 1.915-2.378-1.83-8.811 11.455-8.811-11.455-2.378 1.83 8.527 11.085h-4.338v3h5.5v2h-5.5v3h5.5v3h3v-3h5.5v-3h-5.5v-2h5.5v-3h-4.338z"/></svg>
);

FiBsYen.displayName = 'FiBsYen';
