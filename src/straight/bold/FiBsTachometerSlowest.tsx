import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTachometerSlowest: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14,13a2,2,0,0,1-2.623,1.9l-4.6,1.977L5.593,14.122l4.6-1.977A2,2,0,0,1,14,13ZM12,1A11.995,11.995,0,0,0,5.112,22.818l.937.659,3.408-2.822-1.914-2.31L5.956,19.659a9,9,0,1,1,12.094-.006l-1.552-1.3-1.929,2.3,3.375,2.831.944-.662A11.995,11.995,0,0,0,12,1Z"/></svg>
);

FiBsTachometerSlowest.displayName = 'FiBsTachometerSlowest';
