import React from 'react';
import type { IconProps } from '../../types';

export const Grill: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17.852,17.467,21.118,24H18.882l-2.855-5.71A11.849,11.849,0,0,1,13,18.949V24H11V18.949a11.849,11.849,0,0,1-3.027-.659L5.118,24H2.882l3.266-6.533A12.006,12.006,0,0,1,0,7V6H24V7A12.006,12.006,0,0,1,17.852,17.467ZM13,0H11V4h2Zm4,0H15V4h2ZM9,0H7V4H9Z"/></svg>
);

Grill.displayName = 'Grill';
