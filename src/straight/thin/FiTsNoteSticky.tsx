import React from 'react';
import type { IconProps } from '../../types';

export const FiTsNoteSticky: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21.5,0H2.5C1.12,0,0,1.12,0,2.5V24H17.71l6.29-6.29V2.5c0-1.38-1.12-2.5-2.5-2.5ZM1,2.5c0-.83,.67-1.5,1.5-1.5H21.5c.83,0,1.5,.67,1.5,1.5v14.5h-6v6H1V2.5Zm21.29,15.5l-4.29,4.29v-4.29h4.29Z"/></svg>
);

FiTsNoteSticky.displayName = 'FiTsNoteSticky';
