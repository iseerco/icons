import React from 'react';
import type { IconProps } from '../../types';

export const FiBsFilmCanister: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m24,2h-10V0H0v3h2v18H0v3h14v-2h10V2Zm-3,5h-2v-2h2v2Zm-7,0v-2h2v2h-2Zm0,10h2v2h-2v-2Zm0-3v-4h7v4h-7ZM5,3h6v18h-6V3Zm14,16v-2h2v2h-2Z"/></svg>
);

FiBsFilmCanister.displayName = 'FiBsFilmCanister';
