import React from 'react';
import type { IconProps } from '../../types';

export const FiBsEuro: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m14 21a9 9 0 0 1 -8.05-5h10.05v-3h-10.941a8.5 8.5 0 0 1 0-2h10.941v-3h-10.05a8.989 8.989 0 0 1 14.993-1.727l2.314-1.91a11.989 11.989 0 0 0 -20.557 3.637h-2.7v3h2.051c-.028.331-.051.662-.051 1s.023.669.051 1h-2.051v3h2.7a11.989 11.989 0 0 0 20.557 3.637l-2.314-1.91a8.976 8.976 0 0 1 -6.943 3.273z"/></svg>
);

FiBsEuro.displayName = 'FiBsEuro';
