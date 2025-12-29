import React from 'react';
import type { IconProps } from '../../types';

export const FiTsCircleHalf: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13,24h-1C5.38,24,0,18.62,0,12S5.38,0,12,0h1V24ZM12,1C5.93,1,1,5.93,1,12s4.93,11,11,11V1Z"/></svg>
);

FiTsCircleHalf.displayName = 'FiTsCircleHalf';
