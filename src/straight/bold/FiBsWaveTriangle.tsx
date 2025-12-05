import React from 'react';
import type { IconProps } from '../../types';

export const FiBsWaveTriangle: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><polygon points="16.429 23.572 7.43 6.574 2.607 14.761 .022 13.239 7.57 .426 16.571 17.428 21.391 9.257 23.975 10.781 16.429 23.572"/></svg>
);

FiBsWaveTriangle.displayName = 'FiBsWaveTriangle';
