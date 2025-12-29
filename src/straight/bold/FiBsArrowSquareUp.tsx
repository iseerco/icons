import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowSquareUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_16" data-name="Layer 16" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,0H3.5A3.5,3.5,0,0,0,0,3.5V24H24V3.5A3.5,3.5,0,0,0,20.5,0ZM21,21H3V3.5A.5.5,0,0,1,3.5,3h17a.5.5,0,0,1,.5.5ZM8.111,13.1,5.99,10.974l4.242-4.243a2.5,2.5,0,0,1,3.536,0l4.242,4.243L15.889,13.1,13.5,10.706v7.328h-3V10.706Z"/></svg>
);

FiBsArrowSquareUp.displayName = 'FiBsArrowSquareUp';
