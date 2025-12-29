import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTiffFile: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m3 21h17v3h-20v-21c0-1.654 1.346-3 3-3h11.381l5.619 5.664v3.336h-3v-1h-5v-5h-9zm9-2h1.6v-8h-1.6zm12-6.4v-1.6h-4v8h1.6v-3h2.4v-1.6h-2.4v-1.801h2.4zm-5 0v-1.6h-4v8h1.6v-3h2.4v-1.6h-2.4v-1.801h2.4zm-9.75 6.4v-6.4h1.75v-1.6h-5v1.6h1.65v6.4z"/></svg>
);

FiBsTiffFile.displayName = 'FiBsTiffFile';
