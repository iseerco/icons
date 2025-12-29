import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowSmallLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,10.5H10.207l2.439-2.439L10.525,5.939,6.232,10.232a2.5,2.5,0,0,0,0,3.536l4.293,4.293,2.121-2.122L10.207,13.5H19Z"/></svg>
);

FiBsArrowSmallLeft.displayName = 'FiBsArrowSmallLeft';
