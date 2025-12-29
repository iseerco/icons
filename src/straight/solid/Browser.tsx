import React from 'react';
import type { IconProps } from '../../types';

export const Browser: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m0 9v14h24v-14zm15 10h-10v-2h10zm4-4h-14v-2h14zm2-14h-18a3 3 0 0 0 -3 3v3h24v-3a3 3 0 0 0 -3-3zm-17 4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm3 0a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm3 0a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z"/></svg>
);

Browser.displayName = 'Browser';
