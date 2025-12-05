import React from 'react';
import type { IconProps } from '../../types';

export const FiBsRssAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m5.994,21c0,1.657-1.343,3-3,3S-.006,22.657-.006,21s1.343-3,3-3,3,1.343,3,3ZM-.006,0v3c11.58,0,21,9.42,21,21h3C23.994,10.766,13.228,0-.006,0ZM-.006,9v3c6.617,0,12,5.383,12,12h3C14.994,15.729,8.265,9-.006,9Z"/></svg>
);

FiBsRssAlt.displayName = 'FiBsRssAlt';
