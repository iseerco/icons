import React from 'react';
import type { IconProps } from '../../types';

export const CommentInfo: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13.5,6.5A1.5,1.5,0,1,1,12,5,1.5,1.5,0,0,1,13.5,6.5ZM24,12A12,12,0,1,0,12,24H24Zm-2,0V22H12A10,10,0,1,1,22,12Zm-8,0a2,2,0,0,0-2-2H10v2h2v7h2Z"/></svg>
);

CommentInfo.displayName = 'CommentInfo';
