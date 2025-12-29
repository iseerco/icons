import React from 'react';
import type { IconProps } from '../../types';

export const FiBsExchangeAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_16" data-name="Layer 16" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,8H0V5H19V1.372l4.629,4.236a1.113,1.113,0,0,1,0,1.66L19,11.5ZM5,12.372.371,16.608a1.113,1.113,0,0,0,0,1.66L5,22.5V19H24V16H5Z"/></svg>
);

FiBsExchangeAlt.displayName = 'FiBsExchangeAlt';
