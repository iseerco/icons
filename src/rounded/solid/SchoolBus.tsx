import React from 'react';
import type { IconProps } from '../../types';

export const SchoolBus: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m.142 4a4 4 0 0 1 3.858-3h11a4 4 0 0 1 3.858 3zm8.8 16a2.424 2.424 0 0 1 .058.5 2.5 2.5 0 0 1 -5 0 2.424 2.424 0 0 1 .058-.5zm11 0a2.424 2.424 0 0 1 .058.5 2.5 2.5 0 0 1 -5 0 2.424 2.424 0 0 1 .058-.5zm-9.942-2h3v-12h-3zm9-8v-4h-4v4zm-11 0v-4h-3v4zm12 2h-5v6h7a2 2 0 0 0 2-2 4 4 0 0 0 -4-4zm-17-2v-4h-3v4zm5 2h-8v3a3 3 0 0 0 3 3h5z"/></svg>
);

SchoolBus.displayName = 'SchoolBus';
