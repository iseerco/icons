import React from 'react';
import type { IconProps } from '../../types';

export const FiBsLaptopMedical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m22,16V3H2v13H0v2c0,1.657,1.343,3,3,3h18c1.657,0,3-1.343,3-3v-2h-2Zm-7.231,1h-5.538l-.923-1h-3.308V6h14v10h-3.308l-.923,1Zm-1.269-7h2v3h-2v2h-3v-2h-2v-3h2v-2h3v2Z"/></svg>
);

FiBsLaptopMedical.displayName = 'FiBsLaptopMedical';
