import React from 'react';
import type { IconProps } from '../../types';

export const FiTsFilmCanister: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m24,5v-1h-11V1h2V0H0v1h2v22H0v1h15v-1h-2v-3h11v-1h-3v-3h3v-8h-3v-3h3Zm-8,0v3h-3v-3h3ZM3,23V1h9v22H3Zm10-7h3v3h-3v-3Zm7,3h-3v-3h3v3Zm3-4h-10v-6h10v6Zm-3-7h-3v-3h3v3Z"/></svg>
);

FiTsFilmCanister.displayName = 'FiTsFilmCanister';
