import React from 'react';
import type { IconProps } from '../../types';

export const Ftp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m21 5h-18v-2a3 3 0 0 1 3-3h3.4l2.91 2h5.69a3 3 0 0 1 3 3zm3 15h-9.184a3 3 0 0 0 -1.816-1.816v-3.184h8v-8h-18v8h8v3.184a3 3 0 0 0 -1.816 1.816h-9.184v2h9.184a2.982 2.982 0 0 0 5.632 0h9.184z"/></svg>
);

Ftp.displayName = 'Ftp';
