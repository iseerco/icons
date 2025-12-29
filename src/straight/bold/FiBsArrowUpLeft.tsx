import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowUpLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.974,21.853L5.121,3H15V0H2.5C1.122,0,0,1.122,0,2.5V15H3V5.121L21.853,23.974l2.121-2.121Z"/></svg>
);

FiBsArrowUpLeft.displayName = 'FiBsArrowUpLeft';
