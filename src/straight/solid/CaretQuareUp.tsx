import React from 'react';
import type { IconProps } from '../../types';

export const CaretQuareUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H3A3,3,0,0,0,0,3V24H24V3A3,3,0,0,0,21,0ZM11.17,9.371a1.113,1.113,0,0,1,1.66,0L18,15.021H6Z"/></svg>
);

CaretQuareUp.displayName = 'CaretQuareUp';
