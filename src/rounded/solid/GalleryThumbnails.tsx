import React from 'react';
import type { IconProps } from '../../types';

export const GalleryThumbnails: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20,15H4c-2.21,0-4-1.79-4-4V4C0,1.79,1.79,0,4,0H20c2.21,0,4,1.79,4,4v7c0,2.21-1.79,4-4,4ZM3.5,24h-1c-1.38,0-2.5-1.12-2.5-2.5v-1c0-1.38,1.12-2.5,2.5-2.5h1c1.38,0,2.5,1.12,2.5,2.5v1c0,1.38-1.12,2.5-2.5,2.5Zm18,0h-1c-1.38,0-2.5-1.12-2.5-2.5v-1c0-1.38,1.12-2.5,2.5-2.5h1c1.38,0,2.5,1.12,2.5,2.5v1c0,1.38-1.12,2.5-2.5,2.5Zm-9,0h-1c-1.38,0-2.5-1.12-2.5-2.5v-1c0-1.38,1.12-2.5,2.5-2.5h1c1.38,0,2.5,1.12,2.5,2.5v1c0,1.38-1.12,2.5-2.5,2.5Z"/></svg>
);

GalleryThumbnails.displayName = 'GalleryThumbnails';
