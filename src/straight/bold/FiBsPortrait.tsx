import React from 'react';
import type { IconProps } from '../../types';

export const FiBsPortrait: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H3A3,3,0,0,0,0,3V24H24V3A3,3,0,0,0,21,0Zm0,21H18V16a2,2,0,0,0-2-2H8a2,2,0,0,0-2,2v5H3V3H21Z"/><circle cx="12" cy="8.5" r="3.5"/></svg>
);

FiBsPortrait.displayName = 'FiBsPortrait';
