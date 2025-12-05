import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowDownTriangleSquare: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14,14h9v9H14V14ZM18.5,.7l-5,9.3h10L18.5,.7ZM8,19.29V0h-3V19.33l-2.45-2.4L.45,19.07l4.28,4.2c.49,.49,1.13,.73,1.77,.73s1.28-.24,1.77-.73l4.25-4.25-2.12-2.12-2.4,2.4Z"/></svg>
);

FiBsArrowDownTriangleSquare.displayName = 'FiBsArrowDownTriangleSquare';
