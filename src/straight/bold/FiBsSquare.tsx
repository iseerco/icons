import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSquare: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,24H0V0H24ZM3,21H21V3H3Z"/></svg>
);

FiBsSquare.displayName = 'FiBsSquare';
