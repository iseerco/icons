import React from 'react';
import type { IconProps } from '../../types';

export const Calendars: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,2h-2V0h-2V2h-6V0h-2V2h-2c-1.654,0-3,1.346-3,3v15H24V5c0-1.654-1.346-3-3-3ZM7,4h14c.552,0,1,.449,1,1v2H6v-2c0-.551,.448-1,1-1Zm-1,14V9H22v9H6Zm-4,4H20v2H0V8H2v14Z"/></svg>
);

Calendars.displayName = 'Calendars';
