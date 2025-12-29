import React from 'react';
import type { IconProps } from '../../types';

export const FiBsRemoveFolder: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21.62,19.5l2.44,2.44-2.12,2.12-2.44-2.44-2.44,2.44-2.12-2.12,2.44-2.44-2.44-2.44,2.12-2.12,2.44,2.44,2.44-2.44,2.12,2.12-2.44,2.44ZM3,8H21v5h3V6.5c0-1.93-1.57-3.5-3.5-3.5H12.35L8.35,1H3.5C1.57,1,0,2.57,0,4.5V23H13v-3H3V8Z"/></svg>
);

FiBsRemoveFolder.displayName = 'FiBsRemoveFolder';
