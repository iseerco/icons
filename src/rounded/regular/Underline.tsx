import React from 'react';
import type { IconProps } from '../../types';

export const Underline: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,20a8.009,8.009,0,0,0,8-8V1a1,1,0,0,0-2,0V12A6,6,0,0,1,6,12V1A1,1,0,0,0,4,1V12A8.009,8.009,0,0,0,12,20Z"/><path d="M23,22H1a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/></svg>
);

Underline.displayName = 'Underline';
