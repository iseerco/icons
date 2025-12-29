import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCodeSimple: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M8.389,21.682L.915,14.207c-1.17-1.17-1.17-3.073,0-4.243L8.439,2.439l2.121,2.121L3.036,12.085l7.475,7.475-2.121,2.121Zm14.732-7.475c1.17-1.17,1.17-3.073,0-4.243L15.596,2.439l-2.121,2.121,7.525,7.525-7.475,7.475,2.121,2.121,7.475-7.475Z"/></svg>
);

FiBsCodeSimple.displayName = 'FiBsCodeSimple';
