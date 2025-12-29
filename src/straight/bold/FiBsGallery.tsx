import React from 'react';
import type { IconProps } from '../../types';

export const FiBsGallery: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 3.5a3.5 3.5 0 0 0 -3.5-3.5h-10a3.5 3.5 0 0 0 -3.5 3.5v1.5h-.5a3.5 3.5 0 0 0 -3.5 3.5v1.551a3.494 3.494 0 0 0 -3 3.449v10.5h16v-5h4v-5h4zm-20.5 9.5h9a.507.507 0 0 1 .5.5v2.5l-2 2-2-2-6 4.875v-7.375a.5.5 0 0 1 .5-.5zm13.5 3h-1v-2.5a3.5 3.5 0 0 0 -3.5-3.5h-6.5v-1.5a.5.5 0 0 1 .5-.5h10a.507.507 0 0 1 .5.5zm4-5h-1v-2.5a3.5 3.5 0 0 0 -3.5-3.5h-6.5v-1.5a.5.5 0 0 1 .5-.5h10a.507.507 0 0 1 .5.5zm-17 4.5a1.5 1.5 0 1 1 1.5 1.5 1.5 1.5 0 0 1 -1.5-1.5z"/></svg>
);

FiBsGallery.displayName = 'FiBsGallery';
