import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCommentArrowUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12V12C24,5.383,18.617,0,12,0Zm9,21H12c-4.963,0-9-4.038-9-9S7.037,3,12,3s9,4.038,9,9v9Zm-4.5-11h-3v8h-3V10h-3l3.793-3.707c.391-.391,1.024-.391,1.414,0l3.793,3.707Z"/></svg>
);

FiBsCommentArrowUp.displayName = 'FiBsCommentArrowUp';
