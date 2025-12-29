import React from 'react';
import type { IconProps } from '../../types';

export const FiBsH: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><polygon points="19 0 19 10 5 10 5 0 2 0 2 24 5 24 5 13 19 13 19 24 22 24 22 0 19 0"/></svg>
);

FiBsH.displayName = 'FiBsH';
