import React from 'react';
import type { IconProps } from '../../types';

export const FolderXmark: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M0,7v-3C0,2.35,1.35,1,3,1h5.24l4,2h8.76c1.65,0,3,1.35,3,3v1H0Zm24,2v14H0V9H24Zm-10.59,7l2.54-2.54-1.41-1.41-2.54,2.54-2.54-2.54-1.41,1.41,2.54,2.54-2.54,2.54,1.41,1.41,2.54-2.54,2.54,2.54,1.41-1.41-2.54-2.54Z"/></svg>
);

FolderXmark.displayName = 'FolderXmark';
