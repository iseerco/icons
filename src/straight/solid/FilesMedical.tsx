import React from 'react';
import type { IconProps } from '../../types';

export const FilesMedical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m18,24H2V7c0-1.654,1.346-3,3-3v17s13,0,13,0v3ZM18,.139v3.861h3.861L18,.139Zm4,5.861v13H7V3c0-1.654,1.346-3,3-3h6v6h6Zm-4,4h-2.5v-2.5h-2v2.5h-2.5v2h2.5v2.5h2v-2.5h2.5v-2Z"/></svg>
);

FilesMedical.displayName = 'FilesMedical';
