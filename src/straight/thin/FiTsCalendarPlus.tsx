import React from 'react';
import type { IconProps } from '../../types';

export const FiTsCalendarPlus: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21.5,2h-3.5V0h-1V2H7V0h-1V2H2.5C1.122,2,0,3.122,0,4.5V24H24V4.5c0-1.378-1.122-2.5-2.5-2.5ZM2.5,3H21.5c.827,0,1.5,.673,1.5,1.5v3.5H1v-3.5c0-.827,.673-1.5,1.5-1.5ZM1,23V9H23v14H1Zm11.5-7.5h3.5v1h-3.5v3.5h-1v-3.5h-3.5v-1h3.5v-3.5h1v3.5Z"/></svg>
);

FiTsCalendarPlus.displayName = 'FiTsCalendarPlus';
