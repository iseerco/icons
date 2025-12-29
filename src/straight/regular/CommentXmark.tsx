import React from 'react';
import type { IconProps } from '../../types';

export const CommentXmark: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12V12C24,5.383,18.617,0,12,0Zm10,22H12c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10v10Zm-5.543-13.043l-3.043,3.043,3.043,3.043-1.414,1.414-3.043-3.043-3.043,3.043-1.414-1.414,3.043-3.043-3.043-3.043,1.414-1.414,3.043,3.043,3.043-3.043,1.414,1.414Z"/></svg>
);

CommentXmark.displayName = 'CommentXmark';
