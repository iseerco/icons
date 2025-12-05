import React from 'react';
import type { IconProps } from '../../types';

export const Hdd: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18,0H6C3.24,0,1,2.24,1,5v14c0,2.76,2.24,5,5,5h12c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5ZM6,2h12c1.65,0,3,1.35,3,3V15H3V5c0-1.65,1.35-3,3-3Zm12,20H6c-1.65,0-3-1.35-3-3v-2H21v2c0,1.65-1.35,3-3,3Zm2-2.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5,1.5,.67,1.5,1.5Zm-4,0c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5,1.5,.67,1.5,1.5Z"/></svg>
);

Hdd.displayName = 'Hdd';
