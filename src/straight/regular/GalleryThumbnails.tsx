import React from 'react';
import type { IconProps } from '../../types';

export const GalleryThumbnails: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,15H0V3C0,1.35,1.35,0,3,0H21c1.65,0,3,1.35,3,3V15ZM2,13H22V3c0-.55-.45-1-1-1H3c-.55,0-1,.45-1,1V13Zm4,11H0v-6H6v6Zm-4-2h2v-2H2v2Zm22,2h-6v-6h6v6Zm-4-2h2v-2h-2v2Zm-5,2h-6v-6h6v6Zm-4-2h2v-2h-2v2Z"/></svg>
);

GalleryThumbnails.displayName = 'GalleryThumbnails';
