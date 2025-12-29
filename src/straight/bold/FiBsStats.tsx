import React from 'react';
import type { IconProps } from '../../types';

export const FiBsStats: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M3,21V0H0V21a3,3,0,0,0,3,3H24V21Z"/><rect x="18" y="9" width={size} height={size}/><rect x="6" y="9" width={size} height={size}/><rect x="12" y="4" width={size} height={size}/></svg>
);

FiBsStats.displayName = 'FiBsStats';
