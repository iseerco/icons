import React from 'react';
import type { IconProps } from '../../types';

export const ArrowsAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.629,11.108,19,6.872V11H13V5h4.066L12.83.371a1.113,1.113,0,0,0-1.66,0L6.934,5H11v6H5V6.872L.371,11.108a1.113,1.113,0,0,0,0,1.66L5,17V13h6v6H6.934l4.236,4.629a1.113,1.113,0,0,0,1.66,0L17.066,19H13V13h6v4l4.629-4.236A1.113,1.113,0,0,0,23.629,11.108Z"/></svg>
);

ArrowsAlt.displayName = 'ArrowsAlt';
