import React from 'react';
import type { IconProps } from '../../types';

export const CalendarExclamation: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,2h-3V0h-2V2H8V0h-2V2H3C1.346,2,0,3.346,0,5V24H24V5c0-1.654-1.346-3-3-3ZM2,22V10h7v-2H2v-3c0-.551,.449-1,1-1H21c.551,0,1,.449,1,1v3h-7v2h7v12H2ZM11,8h2v8h-2V8Zm0,10h2v2h-2v-2Z"/></svg>
);

CalendarExclamation.displayName = 'CalendarExclamation';
