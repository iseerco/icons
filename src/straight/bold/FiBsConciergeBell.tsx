import React from 'react';
import type { IconProps } from '../../types';

export const FiBsConciergeBell: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,19v-2c0-6.109-4.589-11.166-10.5-11.906V3h1.5V0h-6V3h1.5v2.094C4.589,5.834,0,10.891,0,17v2H10.5v2H0v3H24v-3H13.5v-2h10.5ZM12,8c4.625,0,8.446,3.506,8.945,8H3.055c.499-4.494,4.32-8,8.945-8Z"/></svg>
);

FiBsConciergeBell.displayName = 'FiBsConciergeBell';
