import React from 'react';
import type { IconProps } from '../../types';

export const FiBrArrowUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.427,4.911,14.508.992a3.583,3.583,0,0,0-4.95,0L5.639,4.911A1.5,1.5,0,0,0,7.76,7.032l2.78-2.78.023,18.25a1.5,1.5,0,0,0,1.5,1.5h0a1.5,1.5,0,0,0,1.5-1.5L13.54,4.266l2.766,2.766a1.5,1.5,0,1,0,2.121-2.121Z"/></svg>
);

FiBrArrowUp.displayName = 'FiBrArrowUp';
