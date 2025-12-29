import React from 'react';
import type { IconProps } from '../../types';

export const FiTsCodeCommit: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,11.5h-5.018c-.257-3.627-3.291-6.5-6.982-6.5s-6.725,2.873-6.982,6.5H0v1H5.018c.257,3.627,3.291,6.5,6.982,6.5s6.725-2.873,6.982-6.5h5.018v-1Zm-12,6.5c-3.309,0-6-2.691-6-6s2.691-6,6-6,6,2.691,6,6-2.691,6-6,6Z"/></svg>
);

FiTsCodeCommit.displayName = 'FiTsCodeCommit';
