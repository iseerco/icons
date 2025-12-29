import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCircleThreeQuarters: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24C5.38,24,0,18.62,0,12S5.38,0,12,0h2V10h10v2c0,6.62-5.38,12-12,12ZM11,3.06C6.51,3.55,3,7.38,3,12c0,4.96,4.04,9,9,9,4.62,0,8.45-3.51,8.94-8H11V3.06Z"/></svg>
);

FiBsCircleThreeQuarters.displayName = 'FiBsCircleThreeQuarters';
