import React from 'react';
import type { IconProps } from '../../types';

export const Calendars: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20,24H0V8H2v14H20v2ZM24,7v-2c0-1.654-1.346-3-3-3h-2V0h-2V2h-6V0h-2V2h-2c-1.654,0-3,1.346-3,3v2H24ZM4,9v11H24V9H4Z"/></svg>
);

Calendars.displayName = 'Calendars';
