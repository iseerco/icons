import React from 'react';
import type { IconProps } from '../../types';

export const FiBsPassword: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m9 15h6v3h-6zm4.439-9.061-1.439 1.44-1.439-1.44-2.122 2.122 1.44 1.439-1.44 1.439 2.122 2.122 1.439-1.44 1.439 1.44 2.122-2.122-1.44-1.439 1.44-1.439zm3.561 12.061h6v-3h-6zm6.561-9.939-2.122-2.122-1.439 1.44-1.439-1.44-2.122 2.122 1.44 1.439-1.44 1.439 2.122 2.122 1.439-1.44 1.439 1.44 2.122-2.122-1.44-1.439zm-22.561 9.939h6v-3h-6zm4.439-12.061-1.439 1.44-1.439-1.44-2.122 2.122 1.44 1.439-1.44 1.439 2.122 2.122 1.439-1.44 1.439 1.44 2.122-2.122-1.44-1.439 1.44-1.439z"/></svg>
);

FiBsPassword.displayName = 'FiBsPassword';
