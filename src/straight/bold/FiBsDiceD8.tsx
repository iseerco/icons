import React from 'react';
import type { IconProps } from '../../types';

export const FiBsDiceD8: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14.4.987a3.489,3.489,0,0,0-4.8,0L.012,12,9.6,23.013a3.407,3.407,0,0,0,4.8,0L23.988,12Zm4.875,10.164L13.5,12.856V4.518ZM10.5,4.518v8.338l-5.773-1.7ZM6.4,14.774l4.1,1.211v3.5Zm7.1,4.708v-3.5l4.1-1.211Z"/></svg>
);

FiBsDiceD8.displayName = 'FiBsDiceD8';
