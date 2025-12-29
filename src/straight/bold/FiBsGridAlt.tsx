import React from 'react';
import type { IconProps } from '../../types';

export const FiBsGridAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m20.5 0h-17a3.5 3.5 0 0 0 -3.5 3.5v20.5h24v-20.5a3.5 3.5 0 0 0 -3.5-3.5zm.5 3.5v3.5h-4v-4h3.5a.507.507 0 0 1 .5.5zm-11 10.5v-4h4v4zm4 3v4h-4v-4zm-7-3h-4v-4h4zm3-7v-4h4v4zm7 3h4v4h-4zm-13.5-7h3.5v4h-4v-3.5a.5.5 0 0 1 .5-.5zm-.5 14h4v4h-4zm14 4v-4h4v4z"/></svg>
);

FiBsGridAlt.displayName = 'FiBsGridAlt';
