import React from 'react';
import type { IconProps } from '../../types';

export const Curling: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M0,18H24a6.006,6.006,0,0,1-6,6H6A6.006,6.006,0,0,1,0,18Zm18-8H6a6.006,6.006,0,0,0-6,6H24A6.006,6.006,0,0,0,18,10ZM6,8H18a7.939,7.939,0,0,1,1.567.155l-.029-.125A3.994,3.994,0,0,0,15.657,5H7.138l.142-.65A2.983,2.983,0,0,1,10.209,2H17a1,1,0,0,0,0-2H10.209A4.975,4.975,0,0,0,5.326,3.919L4.4,8.16A8.02,8.02,0,0,1,6,8Z"/></svg>
);

Curling.displayName = 'Curling';
