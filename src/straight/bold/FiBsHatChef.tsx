import React from 'react';
import type { IconProps } from '../../types';

export const FiBsHatChef: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.5,1a5.443,5.443,0,0,0-2.448.582,5.98,5.98,0,0,0-8.1,0A5.443,5.443,0,0,0,5.5,1,5.5,5.5,0,0,0,4,11.792V24H20V11.792A5.5,5.5,0,0,0,18.5,1Zm0,8H17v9H7V9H5.5A2.5,2.5,0,1,1,7.2,4.678L8.51,5.9l.969-1.511a2.982,2.982,0,0,1,5.042,0L15.49,5.9l1.315-1.222A2.5,2.5,0,1,1,18.5,9Z"/></svg>
);

FiBsHatChef.displayName = 'FiBsHatChef';
