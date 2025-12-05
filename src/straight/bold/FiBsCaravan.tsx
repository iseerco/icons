import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCaravan: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M11,20.5A3.5,3.5,0,1,1,7.5,17,3.5,3.5,0,0,1,11,20.5ZM10,7H5v4h5ZM22,17V3.5A3.5,3.5,0,0,0,18.5,0H3.5A3.5,3.5,0,0,0,0,3.5V19.885H2a5.454,5.454,0,0,1,1-2.673V3.5A.5.5,0,0,1,3.5,3h15a.5.5,0,0,1,.5.5V17H17V7H12V17.363A5.457,5.457,0,0,1,12.975,20H24V17Z"/></svg>
);

FiBsCaravan.displayName = 'FiBsCaravan';
