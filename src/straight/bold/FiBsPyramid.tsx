import React from 'react';
import type { IconProps } from '../../types';

export const FiBsPyramid: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,4.346,19.387,21H4.613L12,4.346M12,.01a2.061,2.061,0,0,0-1.9,1.233L0,24H24L13.905,1.243A2.061,2.061,0,0,0,12,.01Z"/></svg>
);

FiBsPyramid.displayName = 'FiBsPyramid';
