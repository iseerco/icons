import React from 'react';
import type { IconProps } from '../../types';

export const FiBsChartCandlestick: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,23.96l-20.5,.04c-1.93,0-3.5-1.57-3.5-3.5V0H3V20.5c0,.28,.22,.5,.5,.5l20.5-.04v3Zm-6-7.96h3v-2h2V2h-2V0h-3V2h-2V14h2v2Zm-10,3h3v-3h2V3h-2V0h-3V3h-2v13h2v3Z"/></svg>
);

FiBsChartCandlestick.displayName = 'FiBsChartCandlestick';
