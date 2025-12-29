import React from 'react';
import type { IconProps } from '../../types';

export const FiBsFolder: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,3H12.369L8.551,1H3A3,3,0,0,0,0,4V23H24V6A3,3,0,0,0,21,3ZM3,20V7.967H21V20Z"/></svg>
);

FiBsFolder.displayName = 'FiBsFolder';
