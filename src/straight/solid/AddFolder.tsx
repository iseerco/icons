import React from 'react';
import type { IconProps } from '../../types';

export const AddFolder: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m0 7v-3a3 3 0 0 1 3-3h5.236l4 2h8.764a3 3 0 0 1 3 3v1zm24 2v14h-24v-14zm-8 6h-3v-3h-2v3h-3v2h3v3h2v-3h3z"/></svg>
);

AddFolder.displayName = 'AddFolder';
