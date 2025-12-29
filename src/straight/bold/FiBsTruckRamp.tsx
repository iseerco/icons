import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTruckRamp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,3H24V0H20.5A3.5,3.5,0,0,0,17,3.5V16.36L.1,21.055l.8,2.89,16.267-4.518A3.5,3.5,0,1,0,20.5,17a3.432,3.432,0,0,0-.5.036V3.5A.5.5,0,0,1,20.5,3Z"/></svg>
);

FiBsTruckRamp.displayName = 'FiBsTruckRamp';
