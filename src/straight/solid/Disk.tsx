import React from 'react';
import type { IconProps } from '../../types';

export const Disk: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><rect x="7" width={size} height={size}/><circle cx="12" cy="14" r="2"/><path d="M19,0V8H5V0H3A3,3,0,0,0,0,3V24H24V5ZM12,18a4,4,0,1,1,4-4A4,4,0,0,1,12,18Z"/></svg>
);

Disk.displayName = 'Disk';
