import React from 'react';
import type { IconProps } from '../../types';

export const FiTsTombstone: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m22,23v-13C22,4.486,17.514,0,12,0S2,4.486,2,10v13H0v1h24v-1h-2ZM3,10C3,5.037,7.038,1,12,1s9,4.037,9,9v13H3v-13Zm9.5.5h3.5v1h-3.5v5.5h-1v-5.5h-3.5v-1h3.5v-3.5h1v3.5Z"/></svg>
);

FiTsTombstone.displayName = 'FiTsTombstone';
