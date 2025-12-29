import React from 'react';
import type { IconProps } from '../../types';

export const FiBsFile: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16.4,0H5A3,3,0,0,0,2,3V24H22V5.656ZM5,21V3h9V8h5V21Z"/></svg>
);

FiBsFile.displayName = 'FiBsFile';
