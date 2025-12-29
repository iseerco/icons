import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArchive: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,0H5A3,3,0,0,0,2,3V24H22V3A3,3,0,0,0,19,0Zm0,3v8H5V3ZM5,21V14H19v7Z"/><rect x="10" y="6" width={size} height={size}/><rect x="10" y="16" width={size} height={size}/></svg>
);

FiBsArchive.displayName = 'FiBsArchive';
