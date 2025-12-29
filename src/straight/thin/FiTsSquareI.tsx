import React from 'react';
import type { IconProps } from '../../types';

export const FiTsSquareI: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m7,4h10v1h-4.5v14h4.5v1H7v-1h4.5V5h-4.5v-1Zm17-1.5v21.5H0V2.5C0,1.122,1.122,0,2.5,0h19c1.378,0,2.5,1.122,2.5,2.5Zm-1,0c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5.673-1.5,1.5v20.5h22V2.5Z"/></svg>
);

FiTsSquareI.displayName = 'FiTsSquareI';
