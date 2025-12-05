import React from 'react';
import type { IconProps } from '../../types';

export const FiTsSignalBarsWeak: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m5,24H1v-5.5c0-.827.673-1.5,1.5-1.5h1c.827,0,1.5.673,1.5,1.5v5.5Zm-3-1h2v-4.5c0-.275-.225-.5-.5-.5h-1c-.275,0-.5.225-.5.5v4.5Z"/></svg>
);

FiTsSignalBarsWeak.displayName = 'FiTsSignalBarsWeak';
