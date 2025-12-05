import React from 'react';
import type { IconProps } from '../../types';

export const FiBsI: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><polygon points="19 3 19 0 5 0 5 3 10.5 3 10.5 21 5 21 5 24 19 24 19 21 13.5 21 13.5 3 19 3"/></svg>
);

FiBsI.displayName = 'FiBsI';
