import React from 'react';
import type { IconProps } from '../../types';

export const FiBsChartScatterBubble: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,21v3H3.5c-1.93,0-3.5-1.57-3.5-3.5V0H3V20.5c0,.28,.22,.5,.5,.5H24Zm-5-15c1.65,0,3-1.35,3-3s-1.35-3-3-3-3,1.35-3,3,1.35,3,3,3Zm-1,10c1.65,0,3-1.35,3-3s-1.35-3-3-3-3,1.35-3,3,1.35,3,3,3Zm-8.5-7c1.38,0,2.5-1.12,2.5-2.5s-1.12-2.5-2.5-2.5-2.5,1.12-2.5,2.5,1.12,2.5,2.5,2.5Zm-1,9c1.38,0,2.5-1.12,2.5-2.5s-1.12-2.5-2.5-2.5-2.5,1.12-2.5,2.5,1.12,2.5,2.5,2.5Z"/></svg>
);

FiBsChartScatterBubble.displayName = 'FiBsChartScatterBubble';
