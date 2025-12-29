import React from 'react';
import type { IconProps } from '../../types';

export const FiTsCurve: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m1.039,24H.039C.039,10.787,10.788.038,24,.038v1C11.339,1.038,1.039,11.339,1.039,24Z"/>
</svg>
);

FiTsCurve.displayName = 'FiTsCurve';
