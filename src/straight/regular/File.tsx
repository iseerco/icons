import React from 'react';
import type { IconProps } from '../../types';

export const File: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><path d="M14.414,0H5A3,3,0,0,0,2,3V24H22V7.586ZM15,3.414,18.586,7H15ZM4,22V3A1,1,0,0,1,5,2h8V9h7V22Z"/></g></svg>
);

File.displayName = 'File';
