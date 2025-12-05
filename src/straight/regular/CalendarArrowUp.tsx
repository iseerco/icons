import React from 'react';
import type { IconProps } from '../../types';

export const CalendarArrowUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m21,2h-3V0h-2v2h-8V0h-2v2h-3c-1.654,0-3,1.346-3,3v19h24V5c0-1.654-1.346-3-3-3ZM3,4h18c.552,0,1,.449,1,1v3H2v-3c0-.551.448-1,1-1Zm-1,18v-12h20v12H2Zm11.405-9.42l3.094,3.094-1.414,1.414-2.085-2.085v4.997h-2v-5.008l-2.075,2.086-1.414-1.414,3.083-3.083c.775-.775,2.036-.772,2.812,0Z"/></svg>
);

CalendarArrowUp.displayName = 'CalendarArrowUp';
