import React from 'react';
import type { IconProps } from '../../types';

export const TruckPickup: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,18H0V11H21a3,3,0,0,1,3,3ZM6.942,20c.587,3.954-5.472,3.952-4.884,0Zm10.116,0c-.587,3.954,5.472,3.952,4.884,0ZM19.824,9,15.84,3.285A3,3,0,0,0,13.379,2H9V9Z"/></svg>
);

TruckPickup.displayName = 'TruckPickup';
