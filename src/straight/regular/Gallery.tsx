import React from 'react';
import type { IconProps } from '../../types';

export const Gallery: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 3a3 3 0 0 0 -3-3h-10a3 3 0 0 0 -3 3v2h-1a3 3 0 0 0 -3 3v2h-1a3 3 0 0 0 -3 3v11h16v-5h4v-5h4zm-21 9h10a1 1 0 0 1 1 1v.586l-4 4-1.947-1.948-6.053 5.188v-7.826a1 1 0 0 1 1-1zm11 10h-10.3l4.244-3.638 2.056 2.052 4-4zm4-5h-2v-4a3 3 0 0 0 -3-3h-7v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1zm4-5h-2v-4a3 3 0 0 0 -3-3h-7v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1zm-18 3a1 1 0 1 1 1 1 1 1 0 0 1 -1-1z"/></svg>
);

Gallery.displayName = 'Gallery';
