import React from 'react';
import type { IconProps } from '../../types';

export const FiTsSquare7: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,24H0V2.5C0,1.122,1.122,0,2.5,0H21.5c1.379,0,2.5,1.122,2.5,2.5V24ZM1,23H23V2.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5,.673-1.5,1.5V23ZM16,6.916v-.916H8v1h6.812l-5.81,10.528,.876,.482,6.122-11.095Z"/></svg>
);

FiTsSquare7.displayName = 'FiTsSquare7';
