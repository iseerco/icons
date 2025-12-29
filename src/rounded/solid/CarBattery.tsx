import React from 'react';
import type { IconProps } from '../../types';

export const CarBattery: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,5.127V4a2,2,0,0,0-2-2H15a2,2,0,0,0-2,2V5H11V4A2,2,0,0,0,9,2H5A2,2,0,0,0,3,4V5.127A4.006,4.006,0,0,0,0,9v8a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A4.006,4.006,0,0,0,21,5.127ZM9,13H5a1,1,0,0,1,0-2H9A1,1,0,0,1,9,13Zm10,0H18v1a1,1,0,0,1-2,0V13H15a1,1,0,0,1,0-2h1V10a1,1,0,0,1,2,0v1h1A1,1,0,0,1,19,13Z"/></svg>
);

CarBattery.displayName = 'CarBattery';
