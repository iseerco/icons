import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArrowUpLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.994,23.287L1.707,1H14V0H1.5C.673,0,0,.673,0,1.5V14H1V1.707L23.287,23.994l.707-.707Z"/></svg>
);

FiTsArrowUpLeft.displayName = 'FiTsArrowUpLeft';
