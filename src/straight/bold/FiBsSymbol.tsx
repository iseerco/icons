import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSymbol: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><rect y="3" width={size} height={size}/><rect x="8" y="8" width={size} height={size}/><rect x="8" y="18" width={size} height={size}/><rect y="13" width={size} height={size}/></svg>
);

FiBsSymbol.displayName = 'FiBsSymbol';
