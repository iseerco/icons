import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBoxAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m20.5 0h-17a3.5 3.5 0 0 0 -3.5 3.5v20.5h24v-20.5a3.5 3.5 0 0 0 -3.5-3.5zm.5 3.5v1.5h-5v-2h4.5a.5.5 0 0 1 .5.5zm-10-.5h2v5h-2zm-7.5 0h4.5v2h-5v-1.5a.5.5 0 0 1 .5-.5zm-.5 18v-13h5v3h8v-3h5v13zm11.5-5h4.5v3h-4.5z"/></svg>
);

FiBsBoxAlt.displayName = 'FiBsBoxAlt';
