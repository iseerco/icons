import React from 'react';
import type { IconProps } from '../../types';

export const FiBsFileWord: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,5.66L16.38,0H5C3.35,0,2,1.35,2,3V24s20,0,20,0V5.66ZM5,3H14v5h5v4H5V3ZM15.3,22h-2.27l-1.05-2.22-1.01,2.22h-2.31l-1.51-8h2.04l.96,4.97,1.83-4.18,1.83,4.17,.96-4.97h2.04l-1.51,8Z"/></svg>
);

FiBsFileWord.displayName = 'FiBsFileWord';
