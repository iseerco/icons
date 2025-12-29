import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowDownLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.97,2.15L21.85,.03,3,18.88V9H0v12.5c0,1.38,1.12,2.5,2.5,2.5H15v-3H5.12L23.97,2.15Z"/></svg>
);

FiBsArrowDownLeft.displayName = 'FiBsArrowDownLeft';
