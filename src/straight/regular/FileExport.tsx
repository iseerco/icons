import React from 'react';
import type { IconProps } from '../../types';

export const FileExport: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M2,3c0-.55,.45-1,1-1H11v7h9v-1.41L12.41,0H3C1.35,0,0,1.35,0,3V24H20v-2H2V3Zm11,.41l3.59,3.59h-3.59V3.41Zm10.42,13.99l-3.3,3.3-1.41-1.41,2.29-2.29h-8v-2h8.01l-2.3-2.29,1.41-1.41,3.3,3.3c.77,.78,.77,2.04,0,2.81Z"/></svg>
);

FileExport.displayName = 'FileExport';
