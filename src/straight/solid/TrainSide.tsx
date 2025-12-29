import React from 'react';
import type { IconProps } from '../../types';

export const TrainSide: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,22H0V20H24ZM0,8v9H24V16a13.911,13.911,0,0,0-2.527-8ZM6,6h4V2H6Zm6,0h7.779A13.957,13.957,0,0,0,12,2.16ZM4,6V2H0V6Z"/></svg>
);

TrainSide.displayName = 'TrainSide';
