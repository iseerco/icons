import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCalendarMinus: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M8,14h8v3H8v-3ZM24,5.5V24H0V5.5c0-1.93,1.57-3.5,3.5-3.5h2.5V0h3V2h6V0h3V2h2.5c1.93,0,3.5,1.57,3.5,3.5Zm-3,15.5V9H3v12H21Z"/></svg>
);

FiBsCalendarMinus.displayName = 'FiBsCalendarMinus';
