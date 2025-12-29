import React from 'react';
import type { IconProps } from '../../types';

export const TimeDelete: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m23.707 15.293a1 1 0 0 0 -1.414 0l-2.793 2.793-2.793-2.793a1 1 0 0 0 -1.414 1.414l2.793 2.793-2.793 2.793a1 1 0 1 0 1.414 1.414l2.793-2.793 2.793 2.793a1 1 0 0 0 1.414-1.414l-2.793-2.793 2.793-2.793a1 1 0 0 0 0-1.414z"/><path d="m12 22a10 10 0 1 1 10-10 1 1 0 0 0 2 0 12 12 0 1 0 -12 12 1 1 0 0 0 0-2z"/><path d="m12 6a1 1 0 0 0 -1 1v4.586l-2.707 2.707a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 .293-.707v-5a1 1 0 0 0 -1-1z"/></svg>
);

TimeDelete.displayName = 'TimeDelete';
