import React from 'react';
import type { IconProps } from '../../types';

export const CaretUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M6.414,15.586H17.586a1,1,0,0,0,.707-1.707L12.707,8.293a1,1,0,0,0-1.414,0L5.707,13.879A1,1,0,0,0,6.414,15.586Z"/></svg>
);

CaretUp.displayName = 'CaretUp';
