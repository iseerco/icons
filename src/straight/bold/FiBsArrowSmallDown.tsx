import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowSmallDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M15.939,12.354,13.5,14.793V6h-3v8.793L8.061,12.354,5.939,14.475l4.293,4.293a2.5,2.5,0,0,0,3.536,0l4.293-4.293Z"/></svg>
);

FiBsArrowSmallDown.displayName = 'FiBsArrowSmallDown';
