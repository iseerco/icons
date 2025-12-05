import React from 'react';
import type { IconProps } from '../../types';

export const Plate: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0A12.013,12.013,0,0,0,0,12c.63,15.908,23.373,15.9,24,0A12.013,12.013,0,0,0,12,0Zm0,21C.077,20.548.08,3.451,12,3a1,1,0,0,1,0,2,7.008,7.008,0,0,0-7,7c.294,9.251,13.707,9.249,14,0a1,1,0,0,1,2,0A9.01,9.01,0,0,1,12,21Z"/></svg>
);

Plate.displayName = 'Plate';
