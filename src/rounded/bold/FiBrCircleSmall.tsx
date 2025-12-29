import React from 'react';
import type { IconProps } from '../../types';

export const FiBrCircleSmall: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,4.5A7.5,7.5,0,1,0,19.5,12,7.508,7.508,0,0,0,12,4.5Zm0,12A4.5,4.5,0,1,1,16.5,12,4.505,4.505,0,0,1,12,16.5Z"/></svg>
);

FiBrCircleSmall.displayName = 'FiBrCircleSmall';
