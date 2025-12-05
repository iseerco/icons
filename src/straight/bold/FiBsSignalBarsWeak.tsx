import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSignalBarsWeak: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m5,14h-2c-1.654,0-3,1.346-3,3v7h8v-7c0-1.654-1.346-3-3-3Zm0,7h-2v-4h2v4Z"/></svg>
);

FiBsSignalBarsWeak.displayName = 'FiBsSignalBarsWeak';
