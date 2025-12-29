import React from 'react';
import type { IconProps } from '../../types';

export const Smartphone: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M15,0H9A5.006,5.006,0,0,0,4,5V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,15,0ZM9,2h6a3,3,0,0,1,3,3V16H6V5A3,3,0,0,1,9,2Zm6,20H9a3,3,0,0,1-3-3V18H18v1A3,3,0,0,1,15,22Z"/><circle cx="12" cy="20" r="1"/></svg>
);

Smartphone.displayName = 'Smartphone';
