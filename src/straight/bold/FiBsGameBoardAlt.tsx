import React from 'react';
import type { IconProps } from '../../types';

export const FiBsGameBoardAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,0H3.5A3.5,3.5,0,0,0,0,3.5V24H24V3.5A3.5,3.5,0,0,0,20.5,0ZM3,12h9V3h8.5a.5.5,0,0,1,.5.5V12H12v9H3Z"/></svg>
);

FiBsGameBoardAlt.displayName = 'FiBsGameBoardAlt';
