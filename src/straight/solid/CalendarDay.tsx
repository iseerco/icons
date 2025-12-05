import React from 'react';
import type { IconProps } from '../../types';

export const CalendarDay: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m.002,8v-3C.002,3.346,1.348,2,3.002,2h3V0h2v2h8V0h2v2h3c1.654,0,3,1.346,3,3v3H.002Zm6.998,7h-2v2h2v-2Zm17.002-5v14H.002v-14h24Zm-15.002,3H3v6h6v-6Z"/></svg>
);

CalendarDay.displayName = 'CalendarDay';
