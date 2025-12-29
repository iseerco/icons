import React from 'react';
import type { IconProps } from '../../types';

export const ChessRookAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M4,20H20a2,2,0,0,1,2,2h0a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2H2A2,2,0,0,1,4,20ZM21,2V6a3.006,3.006,0,0,1-2,2.829V18H5V8.829A3.006,3.006,0,0,1,3,6V2A2,2,0,0,1,5,0H6A2,2,0,0,1,8,2V4a1,1,0,0,0,2,0V2a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2V4a1,1,0,0,0,2,0V2a2,2,0,0,1,2-2h1A2,2,0,0,1,21,2Zm-7,9a2,2,0,0,0-4,0v2a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1Z"/></svg>
);

ChessRookAlt.displayName = 'ChessRookAlt';
