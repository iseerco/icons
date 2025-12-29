import React from 'react';
import type { IconProps } from '../../types';

export const CommentInfo: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0a12,12,0,0,0,0,24H24V12A12.013,12.013,0,0,0,12,0Zm0,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12,5Zm2,14H12V12H10V10h2a2,2,0,0,1,2,2Z"/></svg>
);

CommentInfo.displayName = 'CommentInfo';
