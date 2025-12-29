import React from 'react';
import type { IconProps } from '../../types';

export const StarSharpHalf: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m4.567,23.088l2.829-8.754L.039,8.999h9.242L12.5-.668v18.188l-7.933,5.568Z"/>
</svg>
);

StarSharpHalf.displayName = 'StarSharpHalf';
