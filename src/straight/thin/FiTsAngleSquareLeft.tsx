import React from 'react';
import type { IconProps } from '../../types';

export const FiTsAngleSquareLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14.146,17.95l-4.86-4.86c-.601-.601-.601-1.577,0-2.178l4.846-4.846,.707,.707-4.846,4.846c-.21,.211-.21,.553,0,.764l4.86,4.86-.707,.707ZM24,2.5c0-1.379-1.122-2.5-2.5-2.5H2.5C1.122,0,0,1.121,0,2.5V24H24V2.5ZM1,2.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5V23H1V2.5Z"/></svg>
);

FiTsAngleSquareLeft.displayName = 'FiTsAngleSquareLeft';
