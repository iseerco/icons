import React from 'react';
import type { IconProps } from '../../types';

export const FiBsHurricane: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,15a3,3,0,1,1,3-3A3,3,0,0,1,12,15ZM9.864,24H7V21a5.027,5.027,0,0,0,2.081-.435A10.017,10.017,0,0,1,2,11C2,4.523,6.991,0,14.136,0H17V3a5.027,5.027,0,0,0-2.081.435A10.017,10.017,0,0,1,22,13C22,19.477,17.009,24,9.864,24ZM10.28,3.619A7.543,7.543,0,0,0,5,11a6.926,6.926,0,0,0,7,7h3.061s-1.291,2.3-1.341,2.381A7.543,7.543,0,0,0,19,13a6.926,6.926,0,0,0-7-7H8.939S10.23,3.7,10.28,3.619Z"/></svg>
);

FiBsHurricane.displayName = 'FiBsHurricane';
