import React from 'react';
import type { IconProps } from '../../types';

export const FiBrMemory: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.5,2H5.5C2.47,2,0,4.47,0,7.5v10.5c0,2.21,1.79,4,4,4v-1.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5v1.5h3.5v-1.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5v1.5h3.5v-1.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5v1.5c2.21,0,4-1.79,4-4V7.5c0-3.03-2.47-5.5-5.5-5.5ZM3,16v-3s2-.58,2-2.5-2-2.5-2-2.5v-.5c0-1.38,1.12-2.5,2.5-2.5h13c1.38,0,2.5,1.12,2.5,2.5v.5s-2,.58-2,2.5,2,2.5,2,2.5v3H3Zm7-7.5v4c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-4c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5Zm7,0v4c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-4c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5Z"/></svg>
);

FiBrMemory.displayName = 'FiBrMemory';
