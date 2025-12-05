import React from 'react';
import type { IconProps } from '../../types';

export const FileExcel: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21.41,5h-4.41V.59l4.41,4.41Zm.59,2V24H2V3C2,1.34,3.34,0,5,0H15V7h7ZM13.17,15.5l2.77-4.5h-2.35l-1.6,2.59-1.6-2.59h-2.35l2.77,4.5-2.77,4.5h2.35l1.6-2.59,1.6,2.59h2.35l-2.77-4.5Z"/></svg>
);

FileExcel.displayName = 'FileExcel';
