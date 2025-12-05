import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArrowToRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23,5v6.293l-6.146-6.146-.707,.707,5.646,5.646H0v1H21.793l-5.646,5.646,.707,.707,6.146-6.146v6.293h1V5h-1Z"/></svg>
);

FiTsArrowToRight.displayName = 'FiTsArrowToRight';
