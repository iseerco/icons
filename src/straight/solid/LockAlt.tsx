import React from 'react';
import type { IconProps } from '../../types';

export const LockAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m13 10a1 1 0 1 1 -1-1 1 1 0 0 1 1 1zm11 2a12 12 0 1 1 -12-12 12.013 12.013 0 0 1 12 12zm-9-2a3 3 0 1 0 -4 2.816v4.184h2v-4.184a3 3 0 0 0 2-2.816z"/></svg>
);

LockAlt.displayName = 'LockAlt';
