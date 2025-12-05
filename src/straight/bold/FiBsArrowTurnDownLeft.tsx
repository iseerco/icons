import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowTurnDownLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,2V12.5c0,.28-.22,.5-.5,.5H4.51l4.1-4.49-2.22-2.02L.76,12.66c-1.01,1.01-1.01,2.67-.05,3.63l5.68,6.22,2.22-2.02-4.1-4.49h15.99c1.93,0,3.5-1.57,3.5-3.5V2h-3Z"/></svg>
);

FiBsArrowTurnDownLeft.displayName = 'FiBsArrowTurnDownLeft';
