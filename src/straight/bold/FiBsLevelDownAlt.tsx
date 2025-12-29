import React from 'react';
import type { IconProps } from '../../types';

export const FiBsLevelDownAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_16" data-name="Layer 16" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14,18V3.5A3.5,3.5,0,0,0,10.5,0H0V3H10.5a.5.5,0,0,1,.5.5V18H6.421L11.5,23.555a1.338,1.338,0,0,0,1.992,0L18.579,18Z"/></svg>
);

FiBsLevelDownAlt.displayName = 'FiBsLevelDownAlt';
