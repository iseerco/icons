import React from 'react';
import type { IconProps } from '../../types';

export const FiBsWindowMaximize: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,1H3.5C1.57,1,0,2.57,0,4.5V23H24V4.5c0-1.93-1.57-3.5-3.5-3.5ZM3.5,4H20.5c.28,0,.5,.22,.5,.5v2.5H3v-2.5c0-.28,.22-.5,.5-.5Zm-.5,16V10H21v10H3Z"/></svg>
);

FiBsWindowMaximize.displayName = 'FiBsWindowMaximize';
