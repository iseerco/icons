import React from 'react';
import type { IconProps } from '../../types';

export const FiBsHeartRate: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><polygon points="16.474 23.821 11.92 9.652 7.603 21.645 4 13 0 13 0 10 6 10 7.397 13.355 12.08 .348 16.526 14.179 17.919 10 24 10 24 13 20.081 13 16.474 23.821"/></svg>
);

FiBsHeartRate.displayName = 'FiBsHeartRate';
