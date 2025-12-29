import React from 'react';
import type { IconProps } from '../../types';

export const SignalBarsFair: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m11,11h-2c-1.103,0-2,.897-2,2v3h-2c-1.103,0-2,.897-2,2v6h10v-11c0-1.103-.897-2-2-2Zm-4,11h-2v-4h2v4Zm4,0h-2v-9h2v9Z"/></svg>
);

SignalBarsFair.displayName = 'SignalBarsFair';
