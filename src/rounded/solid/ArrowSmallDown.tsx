import React from 'react';
import type { IconProps } from '../../types';

export const ArrowSmallDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.061,12.354a1.5,1.5,0,0,0-2.122,0L13.5,14.793V6a1.5,1.5,0,0,0-3,0v8.793L8.061,12.354a1.5,1.5,0,0,0-2.122,2.121l3.586,3.586a3.5,3.5,0,0,0,4.95,0l3.586-3.586A1.5,1.5,0,0,0,18.061,12.354Z"/></svg>
);

ArrowSmallDown.displayName = 'ArrowSmallDown';
