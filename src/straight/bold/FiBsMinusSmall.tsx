import React from 'react';
import type { IconProps } from '../../types';

export const FiBsMinusSmall: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><rect x="6" y="10.5" width={size} height={size}/></svg>
);

FiBsMinusSmall.displayName = 'FiBsMinusSmall';
