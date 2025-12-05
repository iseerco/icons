import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowFromRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_16" data-name="Layer 16" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,5v5.5H4.5L7.95,7.052,5.829,4.931.879,9.882a3,3,0,0,0,0,4.242l4.949,4.95L7.95,16.953,4.5,13.5H21V19h3V5Z"/></svg>
);

FiBsArrowFromRight.displayName = 'FiBsArrowFromRight';
