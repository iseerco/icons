import React from 'react';
import type { IconProps } from '../../types';

export const FiBsGlass: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M.771,0l3,21a3.517,3.517,0,0,0,3.464,3h9.532a3.517,3.517,0,0,0,3.464-3L23.229,0ZM17.26,20.571a.5.5,0,0,1-.494.429H7.234a.5.5,0,0,1-.494-.429L5.372,11h11.1L17,8H4.944L4.229,3H19.771Z"/></svg>
);

FiBsGlass.displayName = 'FiBsGlass';
