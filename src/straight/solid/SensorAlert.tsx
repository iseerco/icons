import React from 'react';
import type { IconProps } from '../../types';

export const SensorAlert: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16.028,5.964l7.972,13.995V3c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3V24H5.722L16.028,5.964ZM8,3c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Zm-4,2c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm12.026,5l-8,14h15.974l-7.974-14Zm.974,12h-2v-2h2v2Zm-2-3v-4h2v4h-2Z"/></svg>
);

SensorAlert.displayName = 'SensorAlert';
