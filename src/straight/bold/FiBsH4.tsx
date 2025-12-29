import React from 'react';
import type { IconProps } from '../../types';

export const FiBsH4: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m9,4h3v16h-3v-7H3v7H0V4h3v6h6v-6Zm12,0v8h-3.5c-.275,0-.5-.225-.5-.5v-7.5h-3v7.5c0,1.93,1.57,3.5,3.5,3.5h3.5v5h3V4h-3Z"/></svg>
);

FiBsH4.displayName = 'FiBsH4';
