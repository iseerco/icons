import React from 'react';
import type { IconProps } from '../../types';

export const TimeFast: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m10 24h-10v-2h10zm-2-6h-8v2h8zm-2-4h-6v2h6zm6-14a12.013 12.013 0 0 0 -12 12h2a10 10 0 1 1 10 10v2a12 12 0 0 0 0-24zm-1 7v5.414l3.293 3.293 1.414-1.414-2.707-2.707v-4.586z"/></svg>
);

TimeFast.displayName = 'TimeFast';
