import React from 'react';
import type { IconProps } from '../../types';

export const FiBsComment: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,24H12.017A12,12,0,1,1,24,11.246l0,.094ZM12.017,3a9,9,0,1,0,0,18H21V11.389A9.015,9.015,0,0,0,12.017,3Z"/><rect x="8" y="8" width={size} height={size}/><rect x="8" y="14" width={size} height={size}/></svg>
);

FiBsComment.displayName = 'FiBsComment';
