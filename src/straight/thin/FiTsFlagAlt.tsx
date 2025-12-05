import React from 'react';
import type { IconProps } from '../../types';

export const FiTsFlagAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24.054,0H2.546C1.167,0,.046,1.121,.046,2.5V24H1.046V15H24.054l-5.651-7.5L24.054,0Zm-2.006,14H1.046V2.5c0-.827,.673-1.5,1.5-1.5H22.048l-4.897,6.5,4.897,6.5Z"/></svg>
);

FiTsFlagAlt.displayName = 'FiTsFlagAlt';
