import React from 'react';
import type { IconProps } from '../../types';

export const FiBsDelete: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m21 2h-13.241l-7.648 10 7.648 10h13.241a3 3 0 0 0 3-3v-14a3 3 0 0 0 -3-3zm0 17h-11.759l-5.352-7 5.352-7h11.759zm-11.061-5.061 1.94-1.939-1.94-1.939 2.122-2.122 1.939 1.94 1.939-1.94 2.122 2.122-1.94 1.939 1.94 1.939-2.122 2.122-1.939-1.94-1.939 1.94z"/></svg>
);

FiBsDelete.displayName = 'FiBsDelete';
