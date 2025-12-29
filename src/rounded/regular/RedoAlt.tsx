import React from 'react';
import type { IconProps } from '../../types';

export const RedoAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16.9,14.723a1,1,0,0,0,1.414,0l4.949-4.95a2.5,2.5,0,0,0,0-3.536l-4.95-4.949A1,1,0,0,0,16.9,2.7L21.2,7,5,7H5a5,5,0,0,0-5,5v7a5.006,5.006,0,0,0,5,5H19a1,1,0,0,0,0-2H5a3,3,0,0,1-3-3V12A3,3,0,0,1,5,9H5L21.212,9,16.9,13.309A1,1,0,0,0,16.9,14.723Z"/></svg>
);

RedoAlt.displayName = 'RedoAlt';
