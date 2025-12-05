import React from 'react';
import type { IconProps } from '../../types';

export const Stop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><path d="M24,24H0V0H24ZM2,22H22V2H2Z"/></g></svg>
);

Stop.displayName = 'Stop';
