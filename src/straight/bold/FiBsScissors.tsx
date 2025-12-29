import React from 'react';
import type { IconProps } from '../../types';

export const FiBsScissors: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m18.5 13a5.467 5.467 0 0 0 -2.173.449l-2.374-2.849 7.2-8.64-2.305-1.92-6.848 8.217-6.848-8.217-2.3 1.92 7.2 8.64-2.379 2.849a5.525 5.525 0 1 0 2.327 1.896l2-2.4 2 2.4a5.5 5.5 0 1 0 4.5-2.345zm-13 8a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1 -2.5 2.5zm13 0a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1 -2.5 2.5z"/></svg>
);

FiBsScissors.displayName = 'FiBsScissors';
