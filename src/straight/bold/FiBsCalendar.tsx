import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCalendar: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,2H18V0H15V2H9V0H6V2H3A3,3,0,0,0,0,5V24H24V5A3,3,0,0,0,21,2ZM3,21V10H21V21Z"/></svg>
);

FiBsCalendar.displayName = 'FiBsCalendar';
