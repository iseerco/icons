import React from 'react';
import type { IconProps } from '../../types';

export const FileMedical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m21.414,5h-4.414V.586l4.414,4.414Zm-6.414,2V0H5c-1.657,0-3,1.343-3,3v21h20V7h-7Zm1,10h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2Z"/></svg>
);

FileMedical.displayName = 'FileMedical';
