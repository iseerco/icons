import React from 'react';
import type { IconProps } from '../../types';

export const FiBsUsbPendrive: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,8.051V0H5V8.051A2.5,2.5,0,0,0,3,10.5V15a9,9,0,0,0,18,0V10.5A2.5,2.5,0,0,0,19,8.051ZM8,3h8V8H14V6H10V8H8ZM18,15A6,6,0,0,1,6,15V11H18Z"/></svg>
);

FiBsUsbPendrive.displayName = 'FiBsUsbPendrive';
