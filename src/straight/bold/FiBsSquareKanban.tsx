import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSquareKanban: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,0H3.5C1.57,0,0,1.57,0,3.5V24H24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H3V3.5c0-.28,.22-.5,.5-.5H20.5c.28,0,.5,.22,.5,.5V21ZM5,5h3v7h-3V5Zm5.5,0h3v14h-3V5Zm5.5,0h3v4h-3V5Z"/></svg>
);

FiBsSquareKanban.displayName = 'FiBsSquareKanban';
