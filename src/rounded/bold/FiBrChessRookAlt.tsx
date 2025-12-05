import React from 'react';
import type { IconProps } from '../../types';

export const FiBrChessRookAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20,20H19V9.662A3.5,3.5,0,0,0,21,6.5v-3A3.5,3.5,0,0,0,17.5,0h-1a3.475,3.475,0,0,0-2,.629A3.475,3.475,0,0,0,12.5,0h-1a3.475,3.475,0,0,0-2,.629A3.475,3.475,0,0,0,7.5,0h-1A3.5,3.5,0,0,0,3,3.5v3A3.5,3.5,0,0,0,5,9.662V20H4a2,2,0,0,0,0,4H20a2,2,0,0,0,0-4ZM6.5,7A.5.5,0,0,1,6,6.5v-3A.5.5,0,0,1,6.5,3h1a.5.5,0,0,1,.5.5v1a1.5,1.5,0,0,0,3,0v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5v1a1.5,1.5,0,0,0,3,0v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5v3a.5.5,0,0,1-.5.5A1.5,1.5,0,0,0,16,8.5V20H8V8.5A1.5,1.5,0,0,0,6.5,7ZM10,13V11a2,2,0,0,1,4,0v2a1,1,0,0,1-1,1H11A1,1,0,0,1,10,13Z"/></svg>
);

FiBrChessRookAlt.displayName = 'FiBrChessRookAlt';
