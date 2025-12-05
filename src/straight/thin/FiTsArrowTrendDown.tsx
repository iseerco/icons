import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArrowTrendDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23,9v7.293L13,6.293l-6,6L.729,6.021,.021,6.729l6.979,6.979,6-6,9.293,9.293h-7.293v1h7.5c.827,0,1.5-.673,1.5-1.5v-7.5h-1Z"/></svg>
);

FiTsArrowTrendDown.displayName = 'FiTsArrowTrendDown';
