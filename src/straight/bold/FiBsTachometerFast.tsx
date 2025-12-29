import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTachometerFast: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,13a12.019,12.019,0,0,1-5.112,9.818l-.937.659-3.408-2.822,1.914-2.31,1.587,1.313A9,9,0,1,0,5.95,19.653l1.552-1.3,1.929,2.3L6.056,23.48l-.944-.662A12,12,0,1,1,24,13ZM17.535,9.535,15.414,7.414,11.82,11.008A2,2,0,1,0,14,13.073Z"/></svg>
);

FiBsTachometerFast.displayName = 'FiBsTachometerFast';
