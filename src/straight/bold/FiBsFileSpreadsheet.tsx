import React from 'react';
import type { IconProps } from '../../types';

export const FiBsFileSpreadsheet: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16.382,0H5c-1.654,0-3,1.346-3,3V24H22V5.664L16.382,0ZM5,21V3H14v5h5v13H5Zm2-5h4v3H7v-3Zm0-5h4v3H7v-3Zm6,5h4v3h-4v-3Zm0-5h4v3h-4v-3Z"/></svg>
);

FiBsFileSpreadsheet.displayName = 'FiBsFileSpreadsheet';
