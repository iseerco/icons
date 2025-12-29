import React from 'react';
import type { IconProps } from '../../types';

export const FiBsChartWaterfall: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,24H3.5c-1.93,0-3.5-1.57-3.5-3.5V0H3V20.5c0,.28,.22,.5,.5,.5H24v3ZM24,0h-3V17h3V0Zm-5,4h-3v6h3V4Zm-5,4h-3v6h3v-6Zm-5,4h-3v6h3v-6Z"/></svg>
);

FiBsChartWaterfall.displayName = 'FiBsChartWaterfall';
