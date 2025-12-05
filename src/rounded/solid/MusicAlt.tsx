import React from 'react';
import type { IconProps } from '../../types';

export const MusicAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m22.554.923a3.978 3.978 0 0 0 -3.291-.853l-9.184 1.722a5 5 0 0 0 -4.079 4.914v9.85a3.959 3.959 0 0 0 -2-.556 4 4 0 1 0 4 4v-9.124a2 2 0 0 1 1.632-1.966l11.183-2.1a1 1 0 0 1 1.185.99v5.76a3.959 3.959 0 0 0 -2-.56 4 4 0 1 0 4 4v-13a3.987 3.987 0 0 0 -1.446-3.077z"/></svg>
);

MusicAlt.displayName = 'MusicAlt';
