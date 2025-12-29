import React from 'react';
import type { IconProps } from '../../types';

export const CalendarWeek: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m4,18h16v-6H4v6Zm2-4h12v2H6v-2ZM21,2h-3V0h-2v2h-8V0h-2v2h-3c-1.654,0-3,1.346-3,3v19h24V5c0-1.654-1.346-3-3-3ZM3,4h18c.552,0,1,.449,1,1v3H2v-3c0-.551.448-1,1-1Zm-1,18v-12h20v12H2Z"/></svg>
);

CalendarWeek.displayName = 'CalendarWeek';
