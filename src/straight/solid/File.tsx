import React from 'react';
import type { IconProps } from '../../types';

export const File: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><polygon points="17 0.586 17 5 21.414 5 17 0.586"/><path d="M15,7V0H5A3,3,0,0,0,2,3V24H22V7Z"/></svg>
);

File.displayName = 'File';
