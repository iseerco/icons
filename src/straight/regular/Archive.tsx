import React from 'react';
import type { IconProps } from '../../types';

export const Archive: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><path d="M19,0H5A3,3,0,0,0,2,3V24H22V3A3,3,0,0,0,19,0ZM5,2H19a1,1,0,0,1,1,1v8H4V3A1,1,0,0,1,5,2ZM4,22V13H20v9Z"/><rect x="10" y="6" width={size} height={size}/><rect x="10" y="17" width={size} height={size}/></g></svg>
);

Archive.displayName = 'Archive';
