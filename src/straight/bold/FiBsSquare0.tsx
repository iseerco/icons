import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSquare0: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,19c-2.757,0-5-2.243-5-5v-4c0-2.757,2.243-5,5-5s5,2.243,5,5v4c0,2.757-2.243,5-5,5Zm0-11c-1.103,0-2,.897-2,2v4c0,1.103,.897,2,2,2s2-.897,2-2v-4c0-1.103-.897-2-2-2Zm12,16H0V3.5C0,1.57,1.57,0,3.5,0H20.5c1.93,0,3.5,1.57,3.5,3.5V24ZM3,21H21V3.5c0-.276-.224-.5-.5-.5H3.5c-.276,0-.5,.224-.5,.5V21Z"/></svg>
);

FiBsSquare0.displayName = 'FiBsSquare0';
