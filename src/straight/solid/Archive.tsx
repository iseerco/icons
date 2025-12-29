import React from 'react';
import type { IconProps } from '../../types';

export const Archive: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,0H5A3,3,0,0,0,2,3v8H22V3A3,3,0,0,0,19,0ZM14,7H10V5h4Z"/><path d="M2,13V24H22V13Zm12,6H10V17h4Z"/></svg>
);

Archive.displayName = 'Archive';
