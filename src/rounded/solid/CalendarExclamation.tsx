import React from 'react';
import type { IconProps } from '../../types';

export const CalendarExclamation: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16,10c-.552,0-1-.448-1-1s.448-1,1-1h8v-1c0-2.757-2.243-5-5-5h-1V1c0-.552-.448-1-1-1s-1,.448-1,1v1H8V1c0-.552-.448-1-1-1s-1,.448-1,1v1h-1C2.243,2,0,4.243,0,7v1H8c.552,0,1,.448,1,1s-.448,1-1,1H0v9c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V10h-8Zm-4,11c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm1-5c0,.552-.448,1-1,1s-1-.448-1-1v-7c0-.552,.448-1,1-1s1,.448,1,1v7Z"/></svg>
);

CalendarExclamation.displayName = 'CalendarExclamation';
