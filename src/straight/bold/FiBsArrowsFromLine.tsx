import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowsFromLine: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,10.5v3H0v-3H24Zm-10.5,5.5h-3v4h-3l3.793,3.707c.391,.391,1.024,.391,1.414,0l3.793-3.707h-3v-4Zm-3-8h3V4h3L12.707,.293c-.391-.391-1.024-.391-1.414,0l-3.793,3.707h3v4Z"/></svg>
);

FiBsArrowsFromLine.displayName = 'FiBsArrowsFromLine';
