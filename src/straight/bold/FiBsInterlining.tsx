import React from 'react';
import type { IconProps } from '../../types';

export const FiBsInterlining: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><rect x="11" y="4" width={size} height={size}/><rect x="11" y="11" width={size} height={size}/><rect x="11" y="18" width={size} height={size}/><path d="M9,7,5.3,3.3a1.124,1.124,0,0,0-1.59,0L0,7H3V18H0l3.673,3.673a1.115,1.115,0,0,0,1.578,0L8.924,18H6V7Z"/></svg>
);

FiBsInterlining.displayName = 'FiBsInterlining';
