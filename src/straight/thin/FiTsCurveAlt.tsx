import React from 'react';
import type { IconProps } from '../../types';

export const FiTsCurveAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m0,24v-1c5.84,0,10.786-4.753,11.503-11.057C12.278,5.135,17.651,0,24,0v1c-5.84,0-10.786,4.753-11.503,11.057-.775,6.809-6.147,11.943-12.497,11.943Z"/>
</svg>
);

FiTsCurveAlt.displayName = 'FiTsCurveAlt';
