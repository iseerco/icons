import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowToBottom: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_16" data-name="Layer 16" viewBox="0 0 24 24" width={size} height={size} {...props}><polygon points="19.071 16.668 16.95 14.547 13.5 17.997 13.5 0 10.5 0 10.5 17.997 7.05 14.547 4.929 16.668 9.261 21 5 21 5 24 19 24 19 21 14.739 21 19.071 16.668"/></svg>
);

FiBsArrowToBottom.displayName = 'FiBsArrowToBottom';
