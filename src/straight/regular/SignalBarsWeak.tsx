import React from 'react';
import type { IconProps } from '../../types';

export const SignalBarsWeak: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m9,24H3v-6c0-1.103.897-2,2-2h2c1.103,0,2,.897,2,2v6Zm-4-2h2v-4h-2v4Z"/></svg>
);

SignalBarsWeak.displayName = 'SignalBarsWeak';
