import React from 'react';
import type { IconProps } from '../../types';

export const FiTsBarsFilter: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,3v1H0v-1H24ZM8,22h8v-1H8v1ZM4,13H20v-1H4v1Z"/></svg>
);

FiTsBarsFilter.displayName = 'FiTsBarsFilter';
