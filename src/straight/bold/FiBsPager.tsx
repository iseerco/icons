import React from 'react';
import type { IconProps } from '../../types';

export const FiBsPager: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m20.5,2H3.5c-1.93,0-3.5,1.57-3.5,3.5v16.5h24V5.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,17H3V5.5c0-.276.225-.5.5-.5h17c.275,0,.5.224.5.5v13.5ZM5,7h14v4H5v-4Zm0,6h3v3h-3v-3Zm5,0h3v3h-3v-3Zm5,0h3v3h-3v-3Z"/></svg>
);

FiBsPager.displayName = 'FiBsPager';
