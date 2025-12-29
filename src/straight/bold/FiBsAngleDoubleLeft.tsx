import React from 'react';
import type { IconProps } from '../../types';

export const FiBsAngleDoubleLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M3.62,11.654l9.528-9.528L11.027.005,1.5,9.533a3.492,3.492,0,0,0,0,4.934L11.027,24l2.121-2.121L3.62,12.346A.489.489,0,0,1,3.62,11.654Z"/><path d="M23.09,2.126,20.969.005,10.034,10.939a1.5,1.5,0,0,0,0,2.122L20.969,24l2.121-2.121L13.216,12Z"/></svg>
);

FiBsAngleDoubleLeft.displayName = 'FiBsAngleDoubleLeft';
