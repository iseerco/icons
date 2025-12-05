import React from 'react';
import type { IconProps } from '../../types';

export const FiBsY: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><polygon points="22.661 0 18.94 0 12 9.463 5.06 0 1.339 0 10.5 12.492 10.5 24 13.5 24 13.5 12.492 22.661 0"/></svg>
);

FiBsY.displayName = 'FiBsY';
