import React from 'react';
import type { IconProps } from '../../types';

export const CodeCommit: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,11h-5.072c-.487-3.388-3.408-6-6.928-6s-6.441,2.612-6.928,6H0v2H5.072c.487,3.388,3.408,6,6.928,6s6.441-2.612,6.928-6h5.072v-2Zm-12,6c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Z"/></svg>
);

CodeCommit.displayName = 'CodeCommit';
