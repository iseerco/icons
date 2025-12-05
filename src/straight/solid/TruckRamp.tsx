import React from 'react';
import type { IconProps } from '../../types';

export const TruckRamp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,2h3V0H21a3,3,0,0,0-3,3V16.271L.053,22.048l.613,1.9,16.981-5.466A3.516,3.516,0,0,0,20.5,24c4.954-.192,4.419-7.506-.5-6.949V3A1,1,0,0,1,21,2Z"/></svg>
);

TruckRamp.displayName = 'TruckRamp';
