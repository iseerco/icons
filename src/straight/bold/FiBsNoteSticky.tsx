import React from 'react';
import type { IconProps } from '../../types';

export const FiBsNoteSticky: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,0H3.5C1.57,0,0,1.57,0,3.5V24H18.38l5.62-5.66V3.5c0-1.93-1.57-3.5-3.5-3.5ZM3,3.5c0-.28,.22-.5,.5-.5H20.5c.28,0,.5,.22,.5,.5v12.5h-5v5H3V3.5Z"/></svg>
);

FiBsNoteSticky.displayName = 'FiBsNoteSticky';
