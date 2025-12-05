import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowsToDottedLine: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M3.5,12c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Zm7,0c0,.828,.672,1.5,1.5,1.5s1.5-.672,1.5-1.5-.672-1.5-1.5-1.5-1.5,.672-1.5,1.5Zm-2,0c0-.828-.672-1.5-1.5-1.5s-1.5,.672-1.5,1.5,.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Zm13.5-1.5c-.828,0-1.5,.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm-5,0c-.828,0-1.5,.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm-4.293,5.793c-.391-.391-1.024-.391-1.414,0l-3.793,3.707h3v4h3v-4h3l-3.793-3.707Zm-1.414-8.586c.391,.391,1.024,.391,1.414,0l3.793-3.707h-3V0h-3V4h-3l3.793,3.707Z"/></svg>
);

FiBsArrowsToDottedLine.displayName = 'FiBsArrowsToDottedLine';
