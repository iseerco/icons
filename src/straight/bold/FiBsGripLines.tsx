import React from 'react';
import type { IconProps } from '../../types';

export const FiBsGripLines: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m0,14h24v3H0v-3Zm0-7v3h24v-3H0Z"/></svg>
);

FiBsGripLines.displayName = 'FiBsGripLines';
