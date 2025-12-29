import React from 'react';
import type { IconProps } from '../../types';

export const UsbPendrive: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><path d="M19,8.184V0H5V8.184A3,3,0,0,0,3,11v4a9,9,0,0,0,18,0V11A3,3,0,0,0,19,8.184ZM7,2H17V8H7ZM19,15A7,7,0,0,1,5,15V11a1,1,0,0,1,1-1H18a1,1,0,0,1,1,1Z"/><rect x="13" y="4" width={size} height={size}/><rect x="9" y="4" width={size} height={size}/></g></svg>
);

UsbPendrive.displayName = 'UsbPendrive';
