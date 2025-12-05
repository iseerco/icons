import React from 'react';
import type { IconProps } from '../../types';

export const SignalBarsWeak: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m6.5,16h-1c-1.379,0-2.5,1.121-2.5,2.5v3c0,1.379,1.121,2.5,2.5,2.5h1c1.379,0,2.5-1.121,2.5-2.5v-3c0-1.379-1.121-2.5-2.5-2.5Zm.5,5.5c0,.275-.225.5-.5.5h-1c-.275,0-.5-.225-.5-.5v-3c0-.275.225-.5.5-.5h1c.275,0,.5.225.5.5v3Z"/></svg>
);

SignalBarsWeak.displayName = 'SignalBarsWeak';
