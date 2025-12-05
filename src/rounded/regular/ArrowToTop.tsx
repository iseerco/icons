import React from 'react';
import type { IconProps } from '../../types';

export const ArrowToTop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M6,2.031h4.517a2.492,2.492,0,0,0-.285.232l-4.95,4.95A1,1,0,0,0,6.7,8.627l4.3-4.3V23a1,1,0,0,0,2,0V4.324l4.3,4.3a1,1,0,0,0,1.414-1.414l-4.95-4.95a2.492,2.492,0,0,0-.285-.232H18a1,1,0,0,0,0-2H6a1,1,0,0,0,0,2Z"/></svg>
);

ArrowToTop.displayName = 'ArrowToTop';
