import React from 'react';
import type { IconProps } from '../../types';

export const Terminal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M11.11,12L1.4,21.71-.01,20.29,8.28,12-.01,3.71l1.41-1.41L11.11,12Zm-.11,8v2h13v-2H11Z"/></svg>
);

Terminal.displayName = 'Terminal';
