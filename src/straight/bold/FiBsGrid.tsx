import React from 'react';
import type { IconProps } from '../../types';

export const FiBsGrid: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M6.5,24H3a3,3,0,0,1-3-3V17.5H6.5Z"/><path d="M21,24H17.5V17.5H24V21A3,3,0,0,1,21,24Z"/><rect y="8.75" width={size} height={size}/><rect x="17.5" y="8.75" width={size} height={size}/><path d="M6.5,6.5H0V3A3,3,0,0,1,3,0H6.5Z"/><rect x="8.75" y="17.5" width={size} height={size}/><rect x="8.75" y="8.75" width={size} height={size}/><rect x="8.75" width={size} height={size}/><path d="M24,6.5H17.5V0H21a3,3,0,0,1,3,3Z"/></svg>
);

FiBsGrid.displayName = 'FiBsGrid';
