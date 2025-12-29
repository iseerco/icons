import React from 'react';
import type { IconProps } from '../../types';

export const FiBrArrowSmallUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.061,9.525,14.475,5.939a3.585,3.585,0,0,0-4.95,0L5.939,9.525a1.5,1.5,0,0,0,2.122,2.121L10.5,9.207V19a1.5,1.5,0,0,0,3,0V9.207l2.439,2.439a1.5,1.5,0,0,0,2.122-2.121Z"/></svg>
);

FiBrArrowSmallUp.displayName = 'FiBrArrowSmallUp';
