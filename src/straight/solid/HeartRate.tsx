import React from 'react';
import type { IconProps } from '../../types';

export const HeartRate: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m16.494,23.525L11.937,7.442l-4.359,13.459-3.247-7.902H0v-2h5.67l1.685,4.098L12.063.558l4.511,15.917,1.688-5.475h5.738v2h-4.262l-3.244,10.525Z"/></svg>
);

HeartRate.displayName = 'HeartRate';
