import React from 'react';
import type { IconProps } from '../../types';

export const BoxAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m16 0h5a3 3 0 0 1 3 3v2h-8zm-2 0h-4v9h4zm10 7v17h-24v-17h8v4h8v-4zm-3 12h-5v2h5zm-13-14v-5h-5a3 3 0 0 0 -3 3v2z"/></svg>
);

BoxAlt.displayName = 'BoxAlt';
