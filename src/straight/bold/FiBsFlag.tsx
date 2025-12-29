import React from 'react';
import type { IconProps } from '../../types';

export const FiBsFlag: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m16 4v-.5a3.5 3.5 0 0 0 -3.5-3.5h-12.5v24h3v-10h7v.5a3.5 3.5 0 0 0 3.5 3.5h10.5v-14zm-13-1h9.5a.5.5 0 0 1 .5.5v7.5h-10zm18 12h-7.5a.5.5 0 0 1 -.5-.5v-.5h3v-7h5z"/></svg>
);

FiBsFlag.displayName = 'FiBsFlag';
