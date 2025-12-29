import React from 'react';
import type { IconProps } from '../../types';

export const FiBsFileMedical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m13.5,12.5h2.5v3h-2.5v2.5h-3v-2.5h-2.5v-3h2.5v-2.5h3v2.5Zm8.5-6.835v18.335H2V3c0-1.654,1.346-3,3-3h11.381l5.619,5.665Zm-3,15.335v-13h-5V3H5v18h14Z"/></svg>
);

FiBsFileMedical.displayName = 'FiBsFileMedical';
