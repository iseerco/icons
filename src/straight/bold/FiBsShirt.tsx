import React from 'react';
import type { IconProps } from '../../types';

export const FiBsShirt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m24,4.392v19.608h-9.172l3-3h3.172V6.608l-2.612-.804-3.388,3.696-3-3.5,2.493-3h-4.999l2.506,3-3,3.5-3.388-3.696-2.612.804v14.392h3.172l3,3H0V4.392l3.766-1.159L6.988,0l.012.015v-.015h9.986l.006-.008,3.241,3.241,3.767,1.159Zm-10.5,5.608h-3l-2,10.5,3.5,3.5,3.5-3.5-2-10.5Z"/>
</svg>
);

FiBsShirt.displayName = 'FiBsShirt';
