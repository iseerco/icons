import React from 'react';
import type { IconProps } from '../../types';

export const CalendarExclamation: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M15,10v-2h9v-3c0-1.654-1.346-3-3-3h-3V0h-2V2H8V0h-2V2H3C1.346,2,0,3.346,0,5v3H9v2H0v14H24V10H15Zm-2,12h-2v-2h2v2Zm0-4h-2V8h2v10Z"/></svg>
);

CalendarExclamation.displayName = 'CalendarExclamation';
