import React from 'react';
import type { IconProps } from '../../types';

export const ToolCrop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23,18H20V9a5.006,5.006,0,0,0-5-5H6V1A1,1,0,0,0,4,1V4H1A1,1,0,0,0,1,6H4v9a5.006,5.006,0,0,0,5,5h9v3a1,1,0,0,0,2,0V20h3a1,1,0,0,0,0-2ZM9,18a3,3,0,0,1-3-3V6h9a3,3,0,0,1,3,3v9Z"/></svg>
);

ToolCrop.displayName = 'ToolCrop';
