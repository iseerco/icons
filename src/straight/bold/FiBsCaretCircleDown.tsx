import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCaretCircleDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_16" data-name="Layer 16" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,3a9,9,0,1,0,9,9A9.011,9.011,0,0,0,12,3Zm6,7H6l5.17,5.65a1.115,1.115,0,0,0,1.66,0Z"/></svg>
);

FiBsCaretCircleDown.displayName = 'FiBsCaretCircleDown';
