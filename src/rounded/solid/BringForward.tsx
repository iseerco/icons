import React from 'react';
import type { IconProps } from '../../types';

export const BringForward: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M11,16H5c-2.76,0-5-2.24-5-5V5C0,2.24,2.24,0,5,0h6c2.76,0,5,2.24,5,5v6c0,2.76-2.24,5-5,5Zm8,8h-6c-2.76,0-5-2.24-5-5,0-.55,.45-1,1-1h2c3.86,0,7-3.14,7-7v-2c0-.55,.45-1,1-1,2.76,0,5,2.24,5,5v6c0,2.76-2.24,5-5,5Z"/></svg>
);

BringForward.displayName = 'BringForward';
