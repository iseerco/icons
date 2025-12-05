import React from 'react';
import type { IconProps } from '../../types';

export const Folder: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,6.88V6a3,3,0,0,0-3-3H12.236l-4-2H3A3,3,0,0,0,0,4V7Z"/><polygon points="0 8.995 0 23 24 23 24 8.88 0 8.995"/></svg>
);

Folder.displayName = 'Folder';
