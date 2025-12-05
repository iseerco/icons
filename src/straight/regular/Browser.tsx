import React from 'react';
import type { IconProps } from '../../types';

export const Browser: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m21 1h-18a3 3 0 0 0 -3 3v19h24v-19a3 3 0 0 0 -3-3zm-18 2h18a1 1 0 0 1 1 1v3h-20v-3a1 1 0 0 1 1-1zm-1 18v-12h20v12zm3-9h14v2h-14zm0 4h10v2h-10zm-2-11a1 1 0 1 1 1 1 1 1 0 0 1 -1-1zm3 0a1 1 0 1 1 1 1 1 1 0 0 1 -1-1zm3 0a1 1 0 1 1 1 1 1 1 0 0 1 -1-1z"/></svg>
);

Browser.displayName = 'Browser';
