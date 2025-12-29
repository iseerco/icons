import React from 'react';
import type { IconProps } from '../../types';

export const FiTsChartWaterfall: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,24H2.5c-1.38,0-2.5-1.12-2.5-2.5V0H1V21.5c0,.83,.67,1.5,1.5,1.5H24v1ZM22,0h-1V17h1V0Zm-5,4h-1v6h1V4Zm-5,4h-1v6h1v-6Zm-5,4h-1v6h1v-6Z"/></svg>
);

FiTsChartWaterfall.displayName = 'FiTsChartWaterfall';
