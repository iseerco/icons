import React from 'react';
import type { IconProps } from '../../types';

export const CaretSquareLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,12A12,12,0,1,0,12,24,12.013,12.013,0,0,0,24,12ZM12.4,17.731,7.25,12.644a.9.9,0,0,1,0-1.288L12.4,6.269a.924.924,0,0,1,1.575.644V17.087A.924.924,0,0,1,12.4,17.731Z"/></svg>
);

CaretSquareLeft.displayName = 'CaretSquareLeft';
