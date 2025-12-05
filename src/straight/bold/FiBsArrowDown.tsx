import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16.305,16.935l-2.78,2.78L13.5,0l-3,0,.025,19.7L7.761,16.935,5.64,19.056l3.918,3.919a3.5,3.5,0,0,0,4.949,0l3.918-3.919Z"/></svg>
);

FiBsArrowDown.displayName = 'FiBsArrowDown';
