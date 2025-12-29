import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowUpSmallBig: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M8.27,.73l4.25,4.25-2.12,2.12-2.4-2.4V24h-3V4.67l-2.45,2.4L.45,4.93,4.74,.72c.96-.96,2.55-.96,3.52,.01Zm5.73,22.27h10V13H14v10ZM16,1V9h8V1h-8Z"/></svg>
);

FiBsArrowUpSmallBig.displayName = 'FiBsArrowUpSmallBig';
