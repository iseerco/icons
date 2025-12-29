import React from 'react';
import type { IconProps } from '../../types';

export const FiBsShekelSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M4,24H1V0h7.5c4.687,0,8.5,3.813,8.5,8.5v8.5h-3V8.5c0-3.032-2.468-5.5-5.5-5.5H4V24ZM23,15.5V0h-3V15.5c0,3.032-2.468,5.5-5.5,5.5h-4.5V7h-3V24h7.5c4.687,0,8.5-3.813,8.5-8.5Z"/></svg>
);

FiBsShekelSign.displayName = 'FiBsShekelSign';
