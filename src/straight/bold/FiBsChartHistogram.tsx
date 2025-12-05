import React from 'react';
import type { IconProps } from '../../types';

export const FiBsChartHistogram: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><rect x="7" y="9" width={size} height={size}/><rect x="14" y="12" width={size} height={size}/><rect x="21" y="8" width={size} height={size}/><path d="M16.128,8.033a2.263,2.263,0,0,1-1.6-.663L10.372,3.218,8.3,5.3,6.174,3.174,8.769.579a2.32,2.32,0,0,1,3.207,0l4.152,4.151L20.439.419l2.122,2.122L17.731,7.37A2.259,2.259,0,0,1,16.128,8.033Z"/><path d="M24,24H3.5A3.5,3.5,0,0,1,0,20.5V0H3V20.5a.5.5,0,0,0,.5.5H24Z"/></svg>
);

FiBsChartHistogram.displayName = 'FiBsChartHistogram';
