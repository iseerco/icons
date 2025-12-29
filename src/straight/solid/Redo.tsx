import React from 'react';
import type { IconProps } from '../../types';

export const Redo: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M2.007,24h-2V16A9.007,9.007,0,0,1,9,7l4.843-.154V.432l9.287,9.293a3,3,0,0,1,0,4.242L13.845,23.26V16.846L9,17A7.006,7.006,0,0,0,2.007,24Z"/></svg>
);

Redo.displayName = 'Redo';
