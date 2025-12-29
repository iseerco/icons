import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCursorText: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16,3h2.5V0H16a5.483,5.483,0,0,0-4,1.737A5.483,5.483,0,0,0,8,0H5.5V3H8a2.5,2.5,0,0,1,2.5,2.5V13h-4v3h4v2.5A2.5,2.5,0,0,1,8,21H5.5v3H8a5.483,5.483,0,0,0,4-1.737A5.483,5.483,0,0,0,16,24h2.5V21H16a2.5,2.5,0,0,1-2.5-2.5V16h4V13h-4V5.5A2.5,2.5,0,0,1,16,3Z"/></svg>
);

FiBsCursorText.displayName = 'FiBsCursorText';
