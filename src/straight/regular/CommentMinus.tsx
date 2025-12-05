import React from 'react';
import type { IconProps } from '../../types';

export const CommentMinus: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12v-12C24,5.383,18.617,0,12,0Zm10,22h-10c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10v10ZM7,11h10v2H7v-2Z"/></svg>
);

CommentMinus.displayName = 'CommentMinus';
