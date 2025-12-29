import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArchway: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,3.114V1H0V3.114l2,2.859v14.027H0v3H10V14c0-1.103,.897-2,2-2s2,.897,2,2v9h10v-3h-2V5.973l2-2.859Zm-7,16.886v-6c0-2.757-2.243-5-5-5s-5,2.243-5,5v6h-2V6h14v14h-2Z"/></svg>
);

FiBsArchway.displayName = 'FiBsArchway';
