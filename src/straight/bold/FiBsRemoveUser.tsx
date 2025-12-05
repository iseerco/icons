import React from 'react';
import type { IconProps } from '../../types';

export const FiBsRemoveUser: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 13h-9v-3h9zm-10-7a6 6 0 1 0 -6 6 6.006 6.006 0 0 0 6-6zm-3 0a3 3 0 1 1 -3-3 3 3 0 0 1 3 3zm5 13a5.006 5.006 0 0 0 -5-5h-6a5.006 5.006 0 0 0 -5 5v5h3v-5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5h3z"/></svg>
);

FiBsRemoveUser.displayName = 'FiBsRemoveUser';
