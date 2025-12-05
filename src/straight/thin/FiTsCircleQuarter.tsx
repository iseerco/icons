import React from 'react';
import type { IconProps } from '../../types';

export const FiTsCircleQuarter: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13,13H0v-.5C0,5.61,5.61,0,12.5,0h.5V13ZM1.01,12H12V1.01C6.06,1.27,1.27,6.06,1.01,12Z"/></svg>
);

FiTsCircleQuarter.displayName = 'FiTsCircleQuarter';
