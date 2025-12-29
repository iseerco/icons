import React from 'react';
import type { IconProps } from '../../types';

export const Comment: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><path d="M24,24H12.018A12,12,0,1,1,24,11.246l0,.063ZM12.018,2a10,10,0,1,0,0,20H22V11.341A10.018,10.018,0,0,0,12.018,2Z"/><rect x="7" y="7" width={size} height={size}/><rect x="7" y="11" width={size} height={size}/><rect x="7" y="15" width={size} height={size}/></g></svg>
);

Comment.displayName = 'Comment';
