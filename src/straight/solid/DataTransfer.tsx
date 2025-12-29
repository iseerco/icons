import React from 'react';
import type { IconProps } from '../../types';

export const DataTransfer: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m12 3v6h-5v2h2v2h-6v-2h2v-2h-5v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3zm6 3v3h2v-3a3 3 0 0 0 -3-3h-3v2h3a1 1 0 0 1 1 1zm-11 12v-3h-2v3a3 3 0 0 0 3 3h4v-2h-4a1 1 0 0 1 -1-1zm17-4v10h-10v-10a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3zm-4 6a1 1 0 1 0 -1 1 1 1 0 0 0 1-1z"/></svg>
);

DataTransfer.displayName = 'DataTransfer';
