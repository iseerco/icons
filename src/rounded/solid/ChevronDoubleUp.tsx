import React from 'react';
import type { IconProps } from '../../types';

export const ChevronDoubleUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><g><path d="M.012,12a1,1,0,0,1,.293-.707L8.477,3.122a5,5,0,0,1,7.07,0l8.172,8.171a1,1,0,0,1-1.414,1.414L14.133,4.536a3,3,0,0,0-4.242,0L1.719,12.707A1,1,0,0,1,.012,12Z"/><path d="M.012,22a1,1,0,0,1,.293-.707l9.586-9.586a3,3,0,0,1,4.242,0l9.586,9.586a1,1,0,0,1-1.414,1.414l-9.586-9.586a1,1,0,0,0-1.414,0L1.719,22.707A1,1,0,0,1,.012,22Z"/></g></svg>
);

ChevronDoubleUp.displayName = 'ChevronDoubleUp';
