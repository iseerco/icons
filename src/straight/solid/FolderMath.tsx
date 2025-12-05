import React from 'react';
import type { IconProps } from '../../types';

export const FolderMath: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="M21,3H12.236L8.236,1H3C1.346,1,0,2.346,0,4V23H24V6c0-1.654-1.346-3-3-3ZM4,8h2v-2h2v2h2v2h-2v2h-2v-2h-2v-2Zm6.207,11.293l-1.414,1.414-1.793-1.793-1.793,1.793-1.414-1.414,1.793-1.793-1.793-1.793,1.414-1.414,1.793,1.793,1.793-1.793,1.414,1.414-1.793,1.793,1.793,1.793Zm9.793,.707h-6v-2h6v2Zm0-3h-6v-2h6v2Zm0-7h-6v-2h6v2Z"/>
</svg>
);

FolderMath.displayName = 'FolderMath';
