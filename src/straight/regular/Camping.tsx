import React from 'react';
import type { IconProps } from '../../types';

export const Camping: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12-.013.408,19.6A2.914,2.914,0,0,0,2.917,24H21.083a2.914,2.914,0,0,0,2.509-4.4ZM9,22l3-5.081L15,22Zm12.88-.461a.9.9,0,0,1-.794.461H17.326L12,12.987,6.674,22H2.917a.913.913,0,0,1-.787-1.378L12,3.919l9.87,16.7A.9.9,0,0,1,21.877,21.539Z"/></svg>
);

Camping.displayName = 'Camping';
