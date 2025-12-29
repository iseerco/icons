import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowSquareDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_16" data-name="Layer 16" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,0H3.5A3.5,3.5,0,0,0,0,3.5V24H24V3.5A3.5,3.5,0,0,0,20.5,0ZM21,21H3V3.5A.5.5,0,0,1,3.5,3h17a.5.5,0,0,1,.5.5ZM15.889,10.939l2.121,2.122L13.768,17.3a2.5,2.5,0,0,1-3.536,0L5.99,13.061l2.121-2.122,2.389,2.39V6h3v7.329Z"/></svg>
);

FiBsArrowSquareDown.displayName = 'FiBsArrowSquareDown';
