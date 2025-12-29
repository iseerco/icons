import React from 'react';
import type { IconProps } from '../../types';

export const FiTsFileMedical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12.5,15.5h3.5v1h-3.5v3.5h-1v-3.5h-3.5v-1h3.5v-3.5h1v3.5Zm9.5-8.207v16.707H2V2.5c0-1.378,1.122-2.5,2.5-2.5h10.207l7.293,7.293Zm-7-.293h5.293L15,1.707v5.293Zm6,16v-15h-7V1H4.5c-.827,0-1.5.673-1.5,1.5v20.5h18Z"/></svg>
);

FiTsFileMedical.displayName = 'FiTsFileMedical';
