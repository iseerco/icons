import React from 'react';
import type { IconProps } from '../../types';

export const FolderUpload: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,3H12.236L8.236,1H3C1.346,1,0,2.346,0,4V23H9v-2H2V9H22v12h-7v2h9V6c0-1.654-1.346-3-3-3ZM2,7v-3c0-.552,.449-1,1-1H7.764l4,2h9.236c.551,0,1,.448,1,1v1H2ZM13,15.003v7.997h-2V14.992l-2.291,2.301-1.414-1.414,3.298-3.298c.375-.376,.875-.583,1.406-.583h0c.531,0,1.031,.207,1.406,.584l3.298,3.297-1.414,1.414-2.291-2.29Z"/></svg>
);

FolderUpload.displayName = 'FolderUpload';
