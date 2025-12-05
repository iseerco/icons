import React from 'react';
import type { IconProps } from '../../types';

export const BoxAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m10 6v-6h4v6a2 2 0 0 1 -4 0zm6-1h8a5.006 5.006 0 0 0 -5-5h-3zm-8-5h-3a5.006 5.006 0 0 0 -5 5h8zm16 7v12a5.006 5.006 0 0 1 -5 5h-14a5.006 5.006 0 0 1 -5-5v-12h8.142a3.981 3.981 0 0 0 7.716 0zm-4 12a1 1 0 0 0 -1-1h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1z"/></svg>
);

BoxAlt.displayName = 'BoxAlt';
