import React from 'react';
import type { IconProps } from '../../types';

export const RemoveUser: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m17 24a1 1 0 0 1 -1-1 7 7 0 0 0 -14 0 1 1 0 0 1 -2 0 9 9 0 0 1 18 0 1 1 0 0 1 -1 1zm6-11h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm-14-1a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6zm0-10a4 4 0 1 0 4 4 4 4 0 0 0 -4-4z"/></svg>
);

RemoveUser.displayName = 'RemoveUser';
