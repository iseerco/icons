import React from 'react';
import type { IconProps } from '../../types';

export const FiBsComputer: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,19V3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3V19H10.5v2H6v3H18V21H13.5V19ZM21,3V13H3V3Z"/></svg>
);

FiBsComputer.displayName = 'FiBsComputer';
