import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSortAmountUpAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><rect x="10" y="8" width={size} height={size}/><rect x="10" y="14" width={size} height={size}/><rect x="10" y="20" width={size} height={size}/><path d="M11.164,5L6.567,.409c-.544-.545-1.427-.545-1.972,0h0L0,5H4V24h3V5h4.164Z"/></svg>
);

FiBsSortAmountUpAlt.displayName = 'FiBsSortAmountUpAlt';
