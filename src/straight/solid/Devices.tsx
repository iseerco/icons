import React from 'react';
import type { IconProps } from '../../types';

export const Devices: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,4c0-1.66-1.34-3-3-3H3C1.34,1,0,2.34,0,4v14H10v2H6v2h6V12c0-2.76,2.24-5,5-5h5v-3Zm2,20H14V12c0-1.65,1.35-3,3-3h4c1.65,0,3,1.35,3,3v12Z"/></svg>
);

Devices.displayName = 'Devices';
