import React from 'react';
import type { IconProps } from '../../types';

export const FiBsReflect: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,13.5H0v-3H24ZM9.671.516,9.544.43A3,3,0,0,0,5,3V9H21.008ZM8,3.012,11.992,6H8ZM9.544,23.57,21.008,15H5v6a3.012,3.012,0,0,0,3,3A3,3,0,0,0,9.544,23.57ZM11.992,18,8,20.988V18Z"/></svg>
);

FiBsReflect.displayName = 'FiBsReflect';
