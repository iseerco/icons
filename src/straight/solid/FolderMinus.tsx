import React from 'react';
import type { IconProps } from '../../types';

export const FolderMinus: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M0,7v-3C0,2.343,1.343,1,3,1h5.236l4,2h8.764c1.657,0,3,1.343,3,3v1H0Zm24,2v14H0V9H24Zm-8,6H8v2h8v-2Z"/></svg>
);

FolderMinus.displayName = 'FolderMinus';
