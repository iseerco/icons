import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowToRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_16" data-name="Layer 16" viewBox="0 0 24 24" width={size} height={size} {...props}><polygon points="21 9.261 16.668 4.929 14.547 7.05 17.997 10.5 0 10.5 0 13.5 17.997 13.5 14.547 16.95 16.668 19.071 21 14.739 21 19 24 19 24 5 21 5 21 9.261"/></svg>
);

FiBsArrowToRight.displayName = 'FiBsArrowToRight';
