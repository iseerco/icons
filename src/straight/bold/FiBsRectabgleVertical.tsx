import React from 'react';
import type { IconProps } from '../../types';

export const FiBsRectabgleVertical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,24H3V0H21ZM6,21H18V3H6Z"/></svg>
);

FiBsRectabgleVertical.displayName = 'FiBsRectabgleVertical';
