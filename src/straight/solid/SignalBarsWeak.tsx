import React from 'react';
import type { IconProps } from '../../types';

export const SignalBarsWeak: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m5,18.5v5.5H1v-5.5c0-.827.673-1.5,1.5-1.5h1c.827,0,1.5.673,1.5,1.5Z"/></svg>
);

SignalBarsWeak.displayName = 'SignalBarsWeak';
