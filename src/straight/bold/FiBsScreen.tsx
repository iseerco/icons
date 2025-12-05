import React from 'react';
import type { IconProps } from '../../types';

export const FiBsScreen: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,19V5a3,3,0,0,0-3-3H3A3,3,0,0,0,0,5V19H10.5v2h-4v3h11V21h-4V19ZM3,5H21V16H3Z"/></svg>
);

FiBsScreen.displayName = 'FiBsScreen';
