import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowUpSquareTriangle: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23,10H14V1h9V10Zm-4.5,4l-5.5,9h11l-5.5-9Zm-7.586-6.396l-2.896-2.896V24h-3V4.707l-2.896,2.896L0,5.482,4.75,.732c.488-.487,1.127-.732,1.768-.732s1.28,.244,1.768,.731l4.75,4.75-2.121,2.121v.002Z"/></svg>
);

FiBsArrowUpSquareTriangle.displayName = 'FiBsArrowUpSquareTriangle';
