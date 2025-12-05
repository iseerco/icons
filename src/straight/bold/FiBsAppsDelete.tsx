import React from 'react';
import type { IconProps } from '../../types';

export const FiBsAppsDelete: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><rect x="13" y="4.5" width={size} height={size}/><path d="M8,3V8H3V3H8m3-3H3A3,3,0,0,0,0,3v8H11V0Z"/><path d="M8,16v5H3V16H8m3-3H0v8a3,3,0,0,0,3,3h8V13Z"/><path d="M21,16v5H16V16h5m3-3H13V24h8a3,3,0,0,0,3-3V13Z"/></svg>
);

FiBsAppsDelete.displayName = 'FiBsAppsDelete';
