import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCircleHalfStroke: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0C5.38,0,0,5.38,0,12s5.38,12,12,12,12-5.38,12-12S18.62,0,12,0Zm0,21V3c4.96,0,9,4.04,9,9s-4.04,9-9,9Z"/></svg>
);

FiBsCircleHalfStroke.displayName = 'FiBsCircleHalfStroke';
