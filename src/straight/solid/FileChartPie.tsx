import React from 'react';
import type { IconProps } from '../../types';

export const FileChartPie: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21.414,5h-4.414V.586l4.414,4.414ZM12,15v-4c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4c0-.559-.117-1.091-.325-1.575l-3.675,1.575ZM22,7V24H2V3C2,1.343,3.343,0,5,0H15V7h7Zm-4,8c0-3.309-2.691-6-6-6s-6,2.691-6,6,2.691,6,6,6,6-2.691,6-6Z"/></svg>
);

FileChartPie.displayName = 'FileChartPie';
