import React from 'react';
import type { IconProps } from '../../types';

export const CalendarWeek: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m0,8v-3c0-1.654,1.346-3,3-3h3V0h2v2h8V0h2v2h3c1.654,0,3,1.346,3,3v3H0Zm19,7H5v2h14v-2Zm5-5v14H0v-14h24Zm-3,3H3v6h18v-6Z"/></svg>
);

CalendarWeek.displayName = 'CalendarWeek';
