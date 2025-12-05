import React from 'react';
import type { IconProps } from '../../types';

export const FiBsRectanglePanoramic: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,19H0V5H24ZM3,16H21V8H3Z"/></svg>
);

FiBsRectanglePanoramic.displayName = 'FiBsRectanglePanoramic';
