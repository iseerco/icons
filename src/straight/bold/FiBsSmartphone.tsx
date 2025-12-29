import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSmartphone: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M4,0V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V0Zm9.005,22.015H10.993V20h2.012ZM7,18V3H17l0,15Z"/></svg>
);

FiBsSmartphone.displayName = 'FiBsSmartphone';
