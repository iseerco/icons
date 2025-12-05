import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCaretSquareLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_16" data-name="Layer 16" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M0,12A12,12,0,1,1,12,24,12.013,12.013,0,0,1,0,12Zm21,0a9,9,0,1,0-9,9A9.011,9.011,0,0,0,21,12Zm-7,6V6L8.35,11.17a1.115,1.115,0,0,0,0,1.66Z"/></svg>
);

FiBsCaretSquareLeft.displayName = 'FiBsCaretSquareLeft';
