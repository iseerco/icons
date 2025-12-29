import React from 'react';
import type { IconProps } from '../../types';

export const Notes: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m21,0H7c-1.654,0-3,1.346-3,3v17h13.687l6.313-6.313V3c0-1.654-1.346-3-3-3ZM6,3c0-.552.449-1,1-1h14c.552,0,1,.448,1,1v9h-6v6H6V3Zm14.858,11l-2.858,2.858v-2.858h2.858ZM2,22h13.654l-2,2H0v-15.223c0-1.302.839-2.402,2-2.816v16.038Z"/></svg>
);

Notes.displayName = 'Notes';
