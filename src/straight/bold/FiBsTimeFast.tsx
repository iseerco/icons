import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTimeFast: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m10 24h-10v-3h10zm-2-8h-8v3h8zm-2-5h-6v3h6zm5-5v6.621l3.439 3.44 2.122-2.122-2.561-2.56v-5.379zm1-6a12.006 12.006 0 0 0 -11.6 9h3.13a8.995 8.995 0 1 1 8.47 12v3a12 12 0 0 0 0-24z"/></svg>
);

FiBsTimeFast.displayName = 'FiBsTimeFast';
