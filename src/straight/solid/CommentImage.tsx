import React from 'react';
import type { IconProps } from '../../types';

export const CommentImage: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12V12C24,5.383,18.617,0,12,0ZM6.5,7c.828,0,1.5,.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5Zm8.5,9.414l-4-4-6.347,6.347c-.456-.496-.862-1.036-1.212-1.616l7.559-7.559,4,4,5.973-5.973c.323,.657,.575,1.352,.748,2.08l-6.721,6.721Z"/></svg>
);

CommentImage.displayName = 'CommentImage';
