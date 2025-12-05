import React from 'react';
import type { IconProps } from '../../types';

export const BlogText: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M0,7v-2c0-1.65,1.35-3,3-3H21c1.65,0,3,1.35,3,3v2H0Zm24,2v13H0V9H24Zm-14,3H4v2h2v5h2v-5h2v-2Zm9,4h-7v2h7v-2Zm0-4h-7v2h7v-2Z"/></svg>
);

BlogText.displayName = 'BlogText';
