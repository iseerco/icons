import React from 'react';
import type { IconProps } from '../../types';

export const FiTsSuitcaseAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21.5,4h-3.5V1.5c0-.827-.673-1.5-1.5-1.5H7.5c-.827,0-1.5,.673-1.5,1.5v2.5H2.5c-1.378,0-2.5,1.121-2.5,2.5V24H24V6.5c0-1.379-1.121-2.5-2.5-2.5ZM7,1.5c0-.275,.224-.5,.5-.5h9c.275,0,.5,.225,.5,.5v2.5H7V1.5ZM23,23h-5V7h-1V23H7V7h-1V23H1V6.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5V23Z"/></svg>
);

FiTsSuitcaseAlt.displayName = 'FiTsSuitcaseAlt';
