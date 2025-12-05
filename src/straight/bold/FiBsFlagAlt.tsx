import React from 'react';
import type { IconProps } from '../../types';

export const FiBsFlagAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24.008,0H3.5C1.57,0,0,1.57,0,3.5V24H3v-8H24.008l-6.028-8L24.008,0Zm-6.017,13H3V3.5c0-.275,.224-.5,.5-.5h14.492l-3.767,5,3.767,5Z"/></svg>
);

FiBsFlagAlt.displayName = 'FiBsFlagAlt';
