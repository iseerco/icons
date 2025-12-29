import React from 'react';
import type { IconProps } from '../../types';

export const Interlining: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_07_interlining" data-name="07 interlining"><rect x="10" y="4" width={size} height={size}/><rect x="10" y="11" width={size} height={size}/><rect x="10" y="18" width={size} height={size}/><path d="M8,6,4.707,2.707a1,1,0,0,0-1.414,0L0,6H3V18H0l3.293,3.293a1,1,0,0,0,1.414,0L8,18H5V6Z"/></g></svg>
);

Interlining.displayName = 'Interlining';
