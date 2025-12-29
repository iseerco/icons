import React from 'react';
import type { IconProps } from '../../types';

export const FiBsMemo: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m17.5,0H6.5c-1.93,0-3.5,1.57-3.5,3.5v20.5h18V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H6V3.5c0-.275.225-.5.5-.5h11c.275,0,.5.225.5.5v17.5ZM8,5h8v3h-8v-3Zm0,5h8v3h-8v-3Zm0,5h4v3h-4v-3Z"/></svg>
);

FiBsMemo.displayName = 'FiBsMemo';
