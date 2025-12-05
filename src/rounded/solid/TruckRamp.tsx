import React from 'react';
import type { IconProps } from '../../types';

export const TruckRamp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,17a3.539,3.539,0,0,0-.508.051c0-.017.008-.033.008-.051V5a3,3,0,0,1,3-3,1,1,0,0,0,0-2,5.006,5.006,0,0,0-5,5V16.279L.684,22.051a1,1,0,0,0,.632,1.9l16.306-5.436A3.5,3.5,0,1,0,20.5,17Z"/></svg>
);

TruckRamp.displayName = 'TruckRamp';
