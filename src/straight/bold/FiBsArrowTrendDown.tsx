import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowTrendDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,8v7.5c0,1.379-1.121,2.5-2.5,2.5h-7.5v-3h4.879l-5.879-5.879-6,6L.064,8.186l2.121-2.121,4.814,4.814,6-6,8,8v-4.879h3Z"/></svg>
);

FiBsArrowTrendDown.displayName = 'FiBsArrowTrendDown';
