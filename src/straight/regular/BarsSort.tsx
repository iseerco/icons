import React from 'react';
import type { IconProps } from '../../types';

export const BarsSort: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,2v2H0V2H24ZM0,22H8v-2H0v2ZM0,13H16v-2H0v2Z"/></svg>
);

BarsSort.displayName = 'BarsSort';
