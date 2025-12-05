import React from 'react';
import type { IconProps } from '../../types';

export const ExamXmark: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m19 0h-14c-1.654 0-3 1.346-3 3v21h20v-21c0-1.654-1.346-3-3-3zm-12 5h10v2h-10zm0 4h10v2h-10zm2.384 6h-2.384v-2h4.384zm8.736 3.691-1.414 1.414-1.693-1.693-1.693 1.693-1.414-1.414 1.693-1.693-1.693-1.693 1.414-1.414 1.693 1.693 1.693-1.693 1.414 1.414-1.693 1.693z"/></svg>
);

ExamXmark.displayName = 'ExamXmark';
