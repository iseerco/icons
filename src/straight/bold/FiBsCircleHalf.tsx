import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCircleHalf: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14,24h-2C5.38,24,0,18.62,0,12S5.38,0,12,0h2V24ZM11,3.06C6.51,3.55,3,7.38,3,12s3.51,8.45,8,8.94V3.06Z"/></svg>
);

FiBsCircleHalf.displayName = 'FiBsCircleHalf';
