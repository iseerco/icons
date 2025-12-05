import React from 'react';
import type { IconProps } from '../../types';

export const CaretSquareLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M0,12A12,12,0,1,1,12,24,12.013,12.013,0,0,1,0,12Zm22,0A10,10,0,1,0,12,22,10.011,10.011,0,0,0,22,12Zm-8,6V6L8.35,11.17a1.115,1.115,0,0,0,0,1.66Z"/></svg>
);

CaretSquareLeft.displayName = 'CaretSquareLeft';
