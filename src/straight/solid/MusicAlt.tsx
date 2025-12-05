import React from 'react';
import type { IconProps } from '../../types';

export const MusicAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m22.916.691a2.992 2.992 0 0 0 -2.469-.638l-11.999 2.247a3 3 0 0 0 -2.448 2.951v11.305a3.959 3.959 0 0 0 -2-.556 4 4 0 1 0 4 4v-10.58l14-2.62v6.761a3.959 3.959 0 0 0 -2-.561 4 4 0 1 0 4 4v-14a3 3 0 0 0 -1.084-2.309z"/></svg>
);

MusicAlt.displayName = 'MusicAlt';
