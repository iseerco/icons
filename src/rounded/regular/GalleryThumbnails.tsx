import React from 'react';
import type { IconProps } from '../../types';

export const GalleryThumbnails: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20,15H4c-2.21,0-4-1.79-4-4V4C0,1.79,1.79,0,4,0H20c2.21,0,4,1.79,4,4v7c0,2.21-1.79,4-4,4ZM4,2c-1.1,0-2,.9-2,2v7c0,1.1,.9,2,2,2H20c1.1,0,2-.9,2-2V4c0-1.1-.9-2-2-2H4Zm-.5,22h-1c-1.38,0-2.5-1.12-2.5-2.5v-1c0-1.38,1.12-2.5,2.5-2.5h1c1.38,0,2.5,1.12,2.5,2.5v1c0,1.38-1.12,2.5-2.5,2.5Zm-1-4c-.28,0-.5,.22-.5,.5v1c0,.28,.22,.5,.5,.5h1c.28,0,.5-.22,.5-.5v-1c0-.28-.22-.5-.5-.5h-1Zm19,4h-1c-1.38,0-2.5-1.12-2.5-2.5v-1c0-1.38,1.12-2.5,2.5-2.5h1c1.38,0,2.5,1.12,2.5,2.5v1c0,1.38-1.12,2.5-2.5,2.5Zm-1-4c-.28,0-.5,.22-.5,.5v1c0,.28,.22,.5,.5,.5h1c.28,0,.5-.22,.5-.5v-1c0-.28-.22-.5-.5-.5h-1Zm-8,4h-1c-1.38,0-2.5-1.12-2.5-2.5v-1c0-1.38,1.12-2.5,2.5-2.5h1c1.38,0,2.5,1.12,2.5,2.5v1c0,1.38-1.12,2.5-2.5,2.5Zm-1-4c-.28,0-.5,.22-.5,.5v1c0,.28,.22,.5,.5,.5h1c.28,0,.5-.22,.5-.5v-1c0-.28-.22-.5-.5-.5h-1Z"/></svg>
);

GalleryThumbnails.displayName = 'GalleryThumbnails';
