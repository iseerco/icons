import React from 'react';
import type { IconProps } from '../../types';

export const CommentExclamation: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12V12C24,5.383,18.617,0,12,0Zm1,19h-2v-2h2v2Zm0-4h-2V5h2V15Z"/></svg>
);

CommentExclamation.displayName = 'CommentExclamation';
