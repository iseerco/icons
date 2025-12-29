import React from 'react';
import type { IconProps } from '../../types';

export const FiBsNavigation: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,21a9,9,0,1,1,9-9A9.01,9.01,0,0,1,12,21ZM6.73,10.076,16.5,7.5l-2.55,9.77a1,1,0,0,1-1.924.007L10.5,13.5,6.723,12A1,1,0,0,1,6.73,10.076Z"/></svg>
);

FiBsNavigation.displayName = 'FiBsNavigation';
