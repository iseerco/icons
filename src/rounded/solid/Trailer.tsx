import React from 'react';
import type { IconProps } from '../../types';

export const Trailer: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M0,12V5A5.006,5.006,0,0,1,5,0H17a5.006,5.006,0,0,1,5,5v7H18V5a1,1,0,0,0-2,0v7H14V5a1,1,0,0,0-2,0v7H10V5A1,1,0,0,0,8,5v7H6V5A1,1,0,0,0,4,5v7ZM8,24a3,3,0,0,0,0-6A3,3,0,0,0,8,24Zm15-5H22V14H0v2a5.007,5.007,0,0,0,3.017,4.589C3.655,14.3,12.868,14.651,13,21H23A1,1,0,0,0,23,19Z"/></svg>
);

Trailer.displayName = 'Trailer';
