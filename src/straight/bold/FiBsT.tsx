import React from 'react';
import type { IconProps } from '../../types';

export const FiBsT: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><polygon points="22 0 2 0 2 3 10.5 3 10.5 24 13.5 24 13.5 3 22 3 22 0"/></svg>
);

FiBsT.displayName = 'FiBsT';
