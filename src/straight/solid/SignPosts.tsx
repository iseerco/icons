import React from 'react';
import type { IconProps } from '../../types';

export const SignPosts: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m24,5c0-1.654-1.346-3-3-3V0h-2v2H5V0h-2v2c-1.654,0-3,1.346-3,3v13h3v6h2v-6h14v6h2v-6h3V5Z"/>
</svg>
);

SignPosts.displayName = 'SignPosts';
