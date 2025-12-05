import React from 'react';
import type { IconProps } from '../../types';

export const CalendarXmark: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m16.207,13.207l-2.793,2.793,2.793,2.793-1.414,1.414-2.793-2.793-2.793,2.793-1.414-1.414,2.793-2.793-2.793-2.793,1.414-1.414,2.793,2.793,2.793-2.793,1.414,1.414Zm7.793-8.207v19H0V5c0-1.654,1.346-3,3-3h3V0h2v2h8V0h2v2h3c1.654,0,3,1.346,3,3Zm-22,0v3h20v-3c0-.552-.449-1-1-1H3c-.551,0-1,.448-1,1Zm20,17v-12H2v12h20Z"/></svg>
);

CalendarXmark.displayName = 'CalendarXmark';
