import React from 'react';
import type { IconProps } from '../../types';

export const FiBsLineWidth: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 24h-24v-6h24zm0-19h-24v4h24zm0 6h-24v5h24zm0-11h-24v3h24z"/></svg>
);

FiBsLineWidth.displayName = 'FiBsLineWidth';
