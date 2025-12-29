import React from 'react';
import type { IconProps } from '../../types';

export const ChartGantt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,24H3c-1.65,0-3-1.35-3-3V0H2V21c0,.55,.45,1,1,1H24v2Zm0-8h-6v2h6v-2Zm-5-6H9v2h10v-2Zm-7-6H5v2h7v-2Z"/></svg>
);

ChartGantt.displayName = 'ChartGantt';
