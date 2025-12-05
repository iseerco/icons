import React from 'react';
import type { IconProps } from '../../types';

export const Grill: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,7V6H0V7A12.007,12.007,0,0,0,6.146,17.472L2.882,24H5.118l2.849-5.7A11.891,11.891,0,0,0,11,18.958V24h2V18.958a11.891,11.891,0,0,0,3.033-.656L18.882,24h2.236l-3.264-6.528A12.007,12.007,0,0,0,24,7ZM12,17A10.013,10.013,0,0,1,2.05,8h19.9A10.013,10.013,0,0,1,12,17ZM13,4H11V0h2Zm4,0H15V0h2ZM9,4H7V0H9Z"/></svg>
);

Grill.displayName = 'Grill';
