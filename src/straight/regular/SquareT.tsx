import React from 'react';
import type { IconProps } from '../../types';

export const SquareT: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m5,5h14v2h-6v12h-2V7h-6v-2Zm19-2v21H0V3C0,1.346,1.346,0,3,0h18c1.654,0,3,1.346,3,3Zm-2,0c0-.552-.449-1-1-1H3c-.551,0-1,.448-1,1v19h20V3Z"/></svg>
);

SquareT.displayName = 'SquareT';
