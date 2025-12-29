import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSquareSmall: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,19H5V8.5c0-1.93,1.57-3.5,3.5-3.5h7c1.93,0,3.5,1.57,3.5,3.5v10.5Zm-11-3h8v-7.5c0-.28-.22-.5-.5-.5h-7c-.28,0-.5,.22-.5,.5v7.5Z"/></svg>
);

FiBsSquareSmall.displayName = 'FiBsSquareSmall';
