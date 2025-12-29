import React from 'react';
import type { IconProps } from '../../types';

export const ArrowSmallUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17.707,9.879,13.414,5.586a2,2,0,0,0-2.828,0L6.293,9.879l1.414,1.414L11,8V19h2V8l3.293,3.293Z"/></svg>
);

ArrowSmallUp.displayName = 'ArrowSmallUp';
