import React from 'react';
import type { IconProps } from '../../types';

export const Resize: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m11 18h2v1a5.006 5.006 0 0 1 -5 5h-3a5.006 5.006 0 0 1 -5-5v-3a5.006 5.006 0 0 1 5-5h1v2a5.006 5.006 0 0 0 5 5zm-3-5a3 3 0 0 0 3 3 3 3 0 0 0 -3-3zm11-13h-8a5.006 5.006 0 0 0 -5 5v6h2a4.969 4.969 0 0 1 2.753.833l5.833-5.833h-2.586a1 1 0 0 1 0-2h3a3 3 0 0 1 3 3v3a1 1 0 0 1 -2 0v-2.586l-5.833 5.833a4.969 4.969 0 0 1 .833 2.753v2h6a5.006 5.006 0 0 0 5-5v-8a5.006 5.006 0 0 0 -5-5z"/></svg>
);

Resize.displayName = 'Resize';
