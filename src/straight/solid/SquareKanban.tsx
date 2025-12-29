import React from 'react';
import type { IconProps } from '../../types';

export const SquareKanban: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H3C1.35,0,0,1.35,0,3V24H24V3c0-1.65-1.35-3-3-3ZM7,15h-2V5h2V15Zm4-3h-2V5h2v7Zm4,7h-2V5h2v14Zm4-10h-2V5h2v4Z"/></svg>
);

SquareKanban.displayName = 'SquareKanban';
