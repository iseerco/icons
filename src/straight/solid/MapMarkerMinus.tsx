import React from 'react';
import type { IconProps } from '../../types';

export const MapMarkerMinus: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19.071,2.929A10,10,0,1,0,4.937,17.079L12,23.987l7.071-6.916A10.009,10.009,0,0,0,19.071,2.929ZM16,11H8V9h8Z"/></svg>
);

MapMarkerMinus.displayName = 'MapMarkerMinus';
