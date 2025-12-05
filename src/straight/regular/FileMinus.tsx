import React from 'react';
import type { IconProps } from '../../types';

export const FileMinus: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m8,14h8v2h-8v-2Zm14-6.414v16.414H2V3c0-1.654,1.346-3,3-3h9.414l7.586,7.586Zm-7-.586h3.586l-3.586-3.586v3.586Zm5,2h-7V2H5c-.551,0-1,.449-1,1v19h16v-13Z"/></svg>
);

FileMinus.displayName = 'FileMinus';
