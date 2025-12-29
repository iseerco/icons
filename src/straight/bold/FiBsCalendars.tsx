import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCalendars: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,2h-.5V0h-3V2h-5V0h-3V2h-.5c-1.93,0-3.5,1.57-3.5,3.5v13.5H24V5.5c0-1.93-1.57-3.5-3.5-3.5Zm-12.5,14V8h13v8H8Zm-5,5H20v3H0V8H3v13Z"/></svg>
);

FiBsCalendars.displayName = 'FiBsCalendars';
