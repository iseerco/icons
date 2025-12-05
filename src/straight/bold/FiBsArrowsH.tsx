import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowsH: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_16" data-name="Layer 16" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.268,10.232l-3.75-3.75L17.4,8.6l1.9,1.9H4.707L6.6,8.6,4.482,6.482l-3.75,3.75a2.5,2.5,0,0,0,0,3.536l3.75,3.75L6.6,15.4l-1.9-1.9H19.293l-1.9,1.9,2.122,2.122,3.75-3.75A2.5,2.5,0,0,0,23.268,10.232Z"/></svg>
);

FiBsArrowsH.displayName = 'FiBsArrowsH';
