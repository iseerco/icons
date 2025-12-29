import React from 'react';
import type { IconProps } from '../../types';

export const FiBsValueAbsolute: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m18.061,8.061l-3.939,3.939,3.939,3.939-2.121,2.121-3.939-3.939-3.939,3.939-2.121-2.121,3.939-3.939-3.939-3.939,2.121-2.121,3.939,3.939,3.939-3.939,2.121,2.121ZM0,24h3V0H0v24ZM21,0v24h3V0h-3Z"/></svg>
);

FiBsValueAbsolute.displayName = 'FiBsValueAbsolute';
