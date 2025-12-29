import React from 'react';
import type { IconProps } from '../../types';

export const Brush: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 10h-24v-5a5.006 5.006 0 0 1 5-5h5v3a1 1 0 0 0 2 0v-3h2v5a1 1 0 0 0 2 0v-5h2v7a1 1 0 0 0 2 0v-6.9a5.009 5.009 0 0 1 4 4.9zm-23.7 2a7.011 7.011 0 0 0 6.7 5h2v4a3 3 0 0 0 6 0v-4h2a7.011 7.011 0 0 0 6.7-5z"/></svg>
);

Brush.displayName = 'Brush';
