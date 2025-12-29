import React from 'react';
import type { IconProps } from '../../types';

export const SignalBarsWeak: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m5,19v3c0,1.105-.895,2-2,2h0c-1.105,0-2-.895-2-2v-3c0-1.105.895-2,2-2h0c1.105,0,2,.895,2,2Z"/></svg>
);

SignalBarsWeak.displayName = 'SignalBarsWeak';
