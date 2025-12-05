import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArrowUpRightFromSquare: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,1.5V10h-1V1.707L8.854,15.854l-.707-.707L22.293,1H14V0h8.5c.827,0,1.5,.673,1.5,1.5Zm-5,21.5H1V6.5c0-.827,.673-1.5,1.5-1.5H15.464l1-1H2.5c-1.378,0-2.5,1.122-2.5,2.5V24H20V7.536l-1,1v14.464Z"/></svg>
);

FiTsArrowUpRightFromSquare.displayName = 'FiTsArrowUpRightFromSquare';
