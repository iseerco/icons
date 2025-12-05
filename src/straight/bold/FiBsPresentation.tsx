import React from 'react';
import type { IconProps } from '../../types';

export const FiBsPresentation: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 16v-3h-2v-9.5a3.5 3.5 0 0 0 -3.5-3.5h-13a3.5 3.5 0 0 0 -3.5 3.5v9.5h-2v3h10.5v3h-1a3.5 3.5 0 0 0 -3.5 3.5v1.5h3v-1.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1.5h3v-1.5a3.5 3.5 0 0 0 -3.5-3.5h-1v-3zm-19-12.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v9.5h-14z"/></svg>
);

FiBsPresentation.displayName = 'FiBsPresentation';
