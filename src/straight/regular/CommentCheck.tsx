import React from 'react';
import type { IconProps } from '../../types';

export const CommentCheck: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,24H12A12,12,0,1,1,24,12ZM12,2a10,10,0,0,0,0,20H22V12A10.011,10.011,0,0,0,12,2Zm-.091,14.419L18.7,9.712,17.3,8.288l-6.806,6.7L6.7,11.285l-1.4,1.43,3.785,3.7a2,2,0,0,0,2.823,0Z"/></svg>
);

CommentCheck.displayName = 'CommentCheck';
