import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTrainSide: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M8.5,1H0V4H3V7H0v3H19.161a12.4,12.4,0,0,1,1.749,5H0v3H24V16.5A15.517,15.517,0,0,0,8.5,1Zm8.1,6H12V4.5A12.477,12.477,0,0,1,16.6,7ZM6,4H8.5c.169,0,.333.017.5.023V7H6ZM0,20H24v3H0Z"/></svg>
);

FiBsTrainSide.displayName = 'FiBsTrainSide';
