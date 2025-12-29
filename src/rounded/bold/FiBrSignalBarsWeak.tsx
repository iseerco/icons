import React from 'react';
import type { IconProps } from '../../types';

export const FiBrSignalBarsWeak: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m4.5,24h-1c-1.93,0-3.5-1.57-3.5-3.5v-3c0-1.93,1.57-3.5,3.5-3.5h1c1.93,0,3.5,1.57,3.5,3.5v3c0,1.93-1.57,3.5-3.5,3.5Zm-1-7c-.275,0-.5.225-.5.5v3c0,.275.225.5.5.5h1c.275,0,.5-.225.5-.5v-3c0-.275-.225-.5-.5-.5h-1Z"/></svg>
);

FiBrSignalBarsWeak.displayName = 'FiBrSignalBarsWeak';
