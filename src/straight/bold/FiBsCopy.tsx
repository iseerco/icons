import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCopy: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m19 19h-19v-15.5a3.5 3.5 0 0 1 3.5-3.5h12a3.5 3.5 0 0 1 3.5 3.5zm-16-3h13v-12.5a.507.507 0 0 0 -.5-.5h-12a.5.5 0 0 0 -.5.5zm18-10.949v15.949h-16v3h19v-15.5a3.494 3.494 0 0 0 -3-3.449z"/></svg>
);

FiBsCopy.displayName = 'FiBsCopy';
